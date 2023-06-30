require("dotenv").config()

const NODE_ENV=process.env.NODE_ENV
const API_ACCESS_TOKEN=process.env.API_ACCESS_TOKEN
const SHOP=process.env.SHOP
const API_KEY=process.env.API_KEY
const API_SECRET_KEY=process.env.API_SECRET_KEY
const SCOPES=process.env.SCOPES
const HOST_NAME=process.env.HOST_NAME
const PORT=process.env.PORT
const DATABASE_URI = process.env.DATABASE_URI

// Fc8TkgjduHcYLPb0
// mern-ecom 
// mongodb+srv://mern-ecom:Fc8TkgjduHcYLPb0@mern.3bwgvtn.mongodb.net/

module.exports = {NODE_ENV, API_ACCESS_TOKEN, SHOP, API_KEY, API_SECRET_KEY, SCOPES, PORT, HOST_NAME, DATABASE_URI}