const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/userRoute')
const auctionRoutes = require('./routes/auctionRoutes')
const connectDB  = require('./config/dB')
const cors = require("cors");

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json())
app.use(cookieParser())
connectDB()

app.use('/user', userRoutes)
app.use('/auction', auctionRoutes)

module.exports = app;