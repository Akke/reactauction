const mongoose = require('mongoose')

const auctionModel = new mongoose.Schema({
    title: {type: String, required: true},
    closingDate: {type: String, required: true}, 
    askingPrice: {type: Number, required: true},
    user: {type: String, required: true},
    bids: [{
        userId: mongoose.Schema.Types.ObjectId,
        bid: Number,
        date: String
    }],
    description: {type: String, required: true}
}, {timestamps: true})

module.exports = mongoose.model('auction', auctionModel)