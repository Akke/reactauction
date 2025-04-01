const express = require('express')
const router = express.Router()
const {createUser, loginUser, getUser, getUsername } = require('../controllers/userController')

router.post('/' ,createUser)
router.post('/login', loginUser)
router.post('/auth' , getUser)
router.get("/:id", getUsername)

module.exports = router