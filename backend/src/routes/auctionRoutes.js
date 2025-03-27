const express = require('express')
const router = express.Router()
const {createAuction, deleteAuction, updateAuction, placeBid, updateBid, getAuction, getAllAuctions, deleteBid} = require('../controllers/auctionController')
const {verifyAuth} = require('../middleware/authMiddleware')

router.delete('/:id', [verifyAuth], deleteAuction)
router.delete('/auctionId/:auctionId/bid/:bidId', [verifyAuth], deleteBid)
router.post('/', createAuction) //Add autorization
router.post('/placeBid', [verifyAuth], placeBid)
router.get('/', getAllAuctions)
router.get('/:id', getAuction)
router.patch('/updateBid', [verifyAuth], updateBid)
router.patch('/:id', [verifyAuth], updateAuction )

module.exports = router