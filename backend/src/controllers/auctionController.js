const Auction = require('../models/auctionModel')
const { findById } = require('../models/userModel')

const createAuction = async (req, res) => {
    const {title, closingDate, askingPrice, description} = req.body
    try{  
        const newAuction = new Auction({
            title: title,
            closingDate: closingDate,
            askingPrice: askingPrice,
            description: description,
            user: req.user.id
        })
        await newAuction.save()
        res.status(200).json({success: true, message: 'successfully created new auction'})
    }catch(error){
        console.error(error.message)
        res.status(500).send('Server error')
    }
}

const deleteAuction = async (req, res) => {
    const {id} = req.params
    const auction = await Auction.findById(id)
    const idIsMatch = req.user.id == auction.user
    if(!idIsMatch){
       return res.status(401).json({success: false, message: "Unauthorized access"})
    }
    const deleteAuction = await Auction.findByIdAndDelete(id)

    res.status(200).json({success: true, message: "Auction successfully deleted"})
}

module.exports = {createAuction, deleteAuction}