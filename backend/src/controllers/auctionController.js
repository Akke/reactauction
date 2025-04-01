const { default: mongoose } = require('mongoose')
const Auction = require('../models/auctionModel')

const createAuction = async (req, res) => {
    const {title, closingDate, askingPrice, description, user} = req.body
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

const getAuction = async (req, res) => {
    const {id} = req.params
    try{
        const idIsValid = mongoose.Types.ObjectId.isValid(id)
        if(!idIsValid){
            return res.status(404).json({success: false, message: "Id is not valid"})
        }
        const auction = await Auction.findOne({"_id": id})
        if(!auction){ 
            return res.status(404).json({success: false, message: "Auction not found"})
        }
        res.status(200).json({succes: true, data: auction})
    }catch(error){
        console.error(error.message)
        res.status(500).send("server error")
    }
}

const getAllAuctions = async (req, res) => {
    try{
        const auction = await Auction.find({ isOpen: true })
        if(!auction){
            return res.status(400).json({success: false, message: "Auction not found"})
        }
        res.status(200).json({succes: true, data: auction})
    }catch(error){
        console.error(error.message)
        res.status(500).send("server error")
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
    const {title, closingDate, askingPrice, description,isOpen} = req.body
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
        description,
        isOpen
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

const placeBid = async (req, res) =>{
    const {id, bid} = req.body
    try{
        const auction = await Auction.findById(id)
        if(auction.isOpen == false){
            return res.status(400).json({success: false, message: "cant place a bid when auction is closed"})
        }
        const sortedBids = auction.bids.sort((a, b) => a.bid - b.bid)
        if(auction.askingPrice > bid){
            return res.status(406).json({success: false, message: "bid cant be lower than asking price"})
        }
        if(sortedBids && sortedBids.length > 0){
            if(sortedBids[0].bid > bid){
                return res.status(406).json({success: false, message: "Bid cant be lower than the highest bid"})
            }
        }
        const newBid = {
            userId: req.user.id,
            bid: bid,
            date: new Date()
        }
         await Auction.findByIdAndUpdate(id, 
            {$push: {bids: newBid}},
            {new: true, runValidators: true}
        )
        res.status(200).json({success: true, message: "Bid successfully placed"})

    }catch(error){
        console.error(error.message)
        res.status(500).json({message:'server error'})
    }
}

const updateBid = async (req, res) => {
    const {auctionId, bidId, bid} = req.body
    try{
        const auction = await Auction.findById(auctionId)
        if(auction.isOpen == false){
            return res.status(400).json({success: false, message:"can't edit your bid when auction is closed"})
        }
        const myBid = auction.bids.filter((fbid) => fbid.id == bidId)
        if(!myBid){
            return res.status(400).json({success: false, message: "You havent placed any bids"})
        }

        const filteredBids = auction.bids.filter((fbid) => (fbid.userId == req.user.id) && (fbid.bid < bid))

        if(!filteredBids){
            return res.status(400).json({success: false, message: "Either no bids or  bid to low"})
        }

        await Auction.updateOne({"_id":auctionId, "bids": { $elemMatch: { _id: new mongoose.Types.ObjectId(bidId) } } },
            {$set: {"bids.$.bid": bid}}
        )
        res.status(200).json({success:true, message: "bid successfully updated"})
        
    }catch(error){
        console.error(error.message)
        res.status(500).send("server error")
    }
}

const deleteBid = async (req, res) => {
    const {bidId, auctionId} = req.params
    try{
        const query = {"_id":auctionId, "bids": { $elemMatch: { _id: new mongoose.Types.ObjectId(bidId) } } };
        const bid = await Auction.findOne(query)
        const idIsMatch = req.user.id == bid.bids[0].userId 
        if(!idIsMatch){
            return res.status(400).json({success:false, message: "Can't delete a bid that oyu haven't placed"})
        }
        await Auction.updateOne(
            query,
            {$pull: {bids: {_id: bidId}}}
        )
        res.status(200).json({success: true, message: "Bid successfully deleted"})
    }catch(error){
        console.error(error.message)
        res.status(500).send('Server error')
    }
}

module.exports = {createAuction, deleteAuction, updateAuction, placeBid, updateBid, getAuction, getAllAuctions, deleteBid}