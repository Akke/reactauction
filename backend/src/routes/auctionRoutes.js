const express = require('express')
const router = express.Router()
const {createAuction, deleteAuction, updateAuction} = require('../controllers/auctionController')
const {verifyAuth} = require('../middleware/authMiddleware')

router.delete('/:id', [verifyAuth], deleteAuction)
router.post('/', [verifyAuth], createAuction)
router.patch('/:id', [verifyAuth], updateAuction )

module.exports = router