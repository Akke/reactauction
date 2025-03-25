const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const createUser = async (req, res) => {
    const {username, password, email} = req.body
    try{

        if(!username || !password){
            res.status(401).json({success: false, message: "Username and password required"})
        }

        if(password.length < 8){
            res.status(401).json({success: false, message: "Password needs to be atleast 8"})
        }

        if(username.length < 3  || username.length > 15){
            res.status(401).json({success: false, message: "Username needs to be atleast 3 characters and can't be more than 15"})
        }

        function isValidEmail (email){
            const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return pattern.test(email)
        }

        async function isEmailTaken (email){
            const isEmailTaken  = await User.findOne({email: email})
            return isEmailTaken
        }

        async function isUsernameTaken(username){
            const isUsernameTaken = await User.findOne({username: username})
            return isTaken
        }

        if(isUsernameTaken){
            res.status(400).json({success: false, message: "Username taken"})
        }

        
        if(isEmailTaken){
            res.status(400).json({success: false, message: "Email already in use"})
        }

        if(!isValidEmail(email)){
            res.status(401).json({success: false, message: "email invalid" })
        }

        const newUser = new User({
            username: username, 
            password: password,
            email: email
        })

        await newUser.save()
        res.status(200).json({success: true, message: "User saved succesfully"})
    } 
    catch (error){
        res.status(500)
    }
}

const loginUser = async (req, res) => {
    const {username, password} = req.body
    try{
        if(!username || !password){
            res.status(401).json({success: false, message: "Username and password required"})
        }
        const user = await User.findOne({username})
        if(!user){
            res.stauts(401).json({success: false, message: 'User not found'})
        }
        const passwordIsValid = await bcrypt.compare(password, user.password)
        if(!passwordIsValid){
            res.status(401).json({success: false, message: "Wrong password"})
        }

        const accessToken = await jwt.sign(
            { id: user._id, username: user.username, email: user.email},
            process.env.JWT_SECRET, 
            {expiresIn: '1h'}
        )

        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: true, 
            sameSite: 'strict',
            maxAge: 60 * 60 * 1000
        })
        
        res.status(200).json({success: true, message: "successfully logged in", accessToken})
    }catch(error){
        console.error(error)
        res.status(500).send('Server error')
    }
}

module.exports = {createUser, loginUser}