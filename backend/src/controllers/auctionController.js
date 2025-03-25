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

const deleteAuction = async (req, res) => {
    const {id} = req.params
    if(!id){
        return res.status(401).send('valid id needs to be sent in url')
    }
    const auction = await Auction.findById(id)
    if(auction.bids && auction.bids.length > 0){
        return res.status(406).json({success: false, message: "Cant delete a auction that has a bid"})
    }
    const idIsMatch = req.user.id == auction.user
    if(!idIsMatch){
       return res.status(401).json({success: false, message: "Unauthorized access"})
    }
    const deleteAuction = await Auction.findByIdAndDelete(id)

    res.status(200).json({success: true, message: "Auction successfully deleted"})
}

const updateAuction = async (req, res) => {
    const {title, closingDate, askingPrice, description} = req.body
    const {id} = req.params
    if(!id){
        return res.status(401).send('valid id needs to be sent in url')
    }
    const auction = await Auction.findById(id)
    const idIsMatch = req.user.id == auction.user
    if(!idIsMatch){
       return res.status(401).json({success: false, message: "Unauthorized access"})
    }

    if(auction.bids && auction.bids.length > 0){
        return res.status(406).json({success: false, message: "Cant edit a auction that has a bid"})
    }
    
    const updateAuction = {
        title,
        closingDate,
        askingPrice,
        description
    };
    
    try{

        const updatedAuction = await Auction.findByIdAndUpdate(id,
            {$set: updateAuction},
            {new: true, runValidators: true}
        )
        res.status(200).json({success: true, message: "Auction updated"})
    }catch(error){
        console.error(error.message)
        res.status(500).send('server error')
    }

}



module.exports = {createAuction, deleteAuction, updateAuction}