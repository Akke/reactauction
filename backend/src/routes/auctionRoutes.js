const express = require('express')
const router = express.Router()
const {createAuction} = require('../controllers/auctionController')
const {verifyAuth} = require('../middleware/authMiddleware')


router.post('/', [verifyAuth], createAuction)

module.exports = router