const mongoose = require('mongoose')
const {DATABASE_URI} = require("../env.vars.js")

const connectDB = async()=>{
    console.log(DATABASE_URI)
    try{
        mongoose.set('strictQuery', true)
        await mongoose.connect(`${DATABASE_URI}`)
        
    } catch(err){
        console.log(err)
    }
}

module.exports = connectDB