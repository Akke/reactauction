const mongoose = require('mongoose')

const auctionModel = new Schema({
    title: {type: String, required: true},
    closingDate: {type: String, required: true}, 
    askingPrice: {type: Number, required: true},
    bids: [{
        userId: mongoose.Schema.Types.ObjectId,
        bid: Number,
        date: String
    }],
    description: {type: String, required: true}
}, {timestamps: true})

module.exports = mongoose.model('auction', auctionModel)