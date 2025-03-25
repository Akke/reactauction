const express = require('express')
const router = express.Router()
const {createAuction, deleteAuction, updateAuction, placeBid} = require('../controllers/auctionController')
const {verifyAuth} = require('../middleware/authMiddleware')

router.delete('/:id', [verifyAuth], deleteAuction)
router.post('/', [verifyAuth], createAuction)
router.patch('/:id', [verifyAuth], updateAuction )
router.post('/placeBid', [verifyAuth], placeBid)

module.exports = router