const express = require('express')
const router = express.Router()
const {createUser, loginUser, getUser} = require('../controllers/userController')

router.post('/' ,createUser)
router.post('/login', loginUser)
router.post('/auth' , getUser)

module.exports = router