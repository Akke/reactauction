const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoute')
const connectDB  = require('./config/dB')

app.use(express.json())

connectDB()

app.use('/user', userRoutes)

module.exports = app;