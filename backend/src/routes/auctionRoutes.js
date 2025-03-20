const express = require('express')
const router = express.Router()
const {createAuction, deleteAuction} = require('../controllers/auctionController')
const {verifyAuth} = require('../middleware/authMiddleware')

router.delete('/:id', [verifyAuth], deleteAuction)
router.post('/', [verifyAuth], createAuction)

module.exports = router