const Auction = require('../models/auctionModel')

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

module.exports = {createAuction}