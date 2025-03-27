require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        mongoose.connect(process.env.DB_CONNECTION_STRING)
        console.log('MongoDb connected')
    }catch(eror){
        res.status(500)
    }
} 

module.exports = connectDB