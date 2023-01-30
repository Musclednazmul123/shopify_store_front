const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        mongoose.set('strictQuery', true)
        await mongoose.connect(`${process.env.DATABASE_URI || "mongodb://localhost:27017/my_app"}`)
        
    } catch(err){
        console.log(err)
    }
}

module.exports = connectDB