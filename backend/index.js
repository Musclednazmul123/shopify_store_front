const express = require('express')
const app = express()
const path = require('path')
const {logger, logEvents} = require('./middleware/logger.js')
const errorHandler = require('./middleware/errorHandler.js')
const cookieParser  = require('cookie-parser')
const cors = require('cors')
const corsoptions = require('./config/corsOptions.js')
const connectDB = require('./config/dbConn.js')
const mongoose = require('mongoose')
const {PORT, NODE_ENV} = require("./env.vars.js")



connectDB()

app.use(logger)

app.use(cors(corsoptions))
app.use(express.json())

app.use(cookieParser())

app.use('/', express.static(path.join(__dirname, 'public')))


app.use('/', require('./routes/root'))
app.use('/users', require('./routes/userRoutes'))
app.use('/product', require('./routes/productRoutes'))
app.use('/cart', require('./routes/cartRoutes'))

app.all('*', (req,res)=>{
    res.status(404)
    if (req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')){
        res.json({
            message: "404 Not Found"
        })
    } else {
        res.type('text').send('404 Not Found')
    }
})


app.use(errorHandler)

mongoose.connection.once('open', ()=>{
    console.log('Connected to MongoDB')
    app.listen(PORT,()=>{
        console.log(NODE_ENV)
        console.log(`server is running at port: ${PORT}`)
    })
})

mongoose.connection.on('error', err=>{
    console.log(err)
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
})