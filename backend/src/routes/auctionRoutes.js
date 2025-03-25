const express = require('express')
const router = express.Router()
const {createAuction, deleteAuction, updateAuction, placeBid, updateBid} = require('../controllers/auctionController')
const {verifyAuth} = require('../middleware/authMiddleware')

router.delete('/:id', [verifyAuth], deleteAuction)
router.post('/', [verifyAuth], createAuction)
router.post('/placeBid', [verifyAuth], placeBid)
router.patch('/updateBid', [verifyAuth], updateBid)
router.patch('/:id', [verifyAuth], updateAuction )

module.exports = router