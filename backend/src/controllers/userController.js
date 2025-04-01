const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const getUsername = async (req, res) => {
    const { id } = req.params

    if(!id) return res.status(401).send({success:false, "message": "Missing User ID parameter."});

    const user = await User.findById(id)
    if(!user) return res.status(404).send({success:false, message: "User not found."});

    res.status(200).send({success:true,data:user})
}

const getUser = async (req, res) => {
    const { token } = req.body;

    if(!token) return res.status(400).send({success:false,message:"Access forbidden"});

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        const id = decoded.id

        const user = await User.findOne({"_id":id}).select("-password");
        if(!user) return res.status(404).json({success:false, message:"User does not exist"});

        res.status(200).json({success:true,data:user});
    })
}

const createUser = async (req, res) => {
    const {username, password, email} = req.body
    try{

        if(!username || !password){
           return res.status(401).json({success: false, message: "Username and password required"})
        }

        if(password.length < 8){
           return res.status(401).json({success: false, message: "Password needs to be atleast 8"})
        }

        if(username.length < 3  || username.length > 15){
           return res.status(401).json({success: false, message: "Username needs to be atleast 3 characters and can't be more than 15"})
        }

        function isValidEmail (email){
            const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return pattern.test(email)
        }

        async function isEmailTaken (email){
            const emailCheck  = await User.findOne({email: email})
            return !!emailCheck
        }

        async function isUsernameTaken(username){
            const usernameCheck = await User.findOne({username: username})
            return !!usernameCheck
        }


        if(await isUsernameTaken(username)){
            return res.status(400).json({success: false, message: "Username taken"})
        }

        if(await isEmailTaken(email)){
            return res.status(400).json({success: false, message: "Email already in use"})
        }

        if(!isValidEmail(email)){
            return res.status(401).json({success: false, message: "email invalid" })
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
            return res.status(401).json({success: false, message: "Username and password required"})
        }
        const user = await User.findOne({username})
        if(!user){
            return res.status(401).json({success: false, message: 'User not found'})
        }
        const passwordIsValid = await bcrypt.compare(password, user.password)
        if(!passwordIsValid){
            return res.status(401).json({success: false, message: "Wrong password"})
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

module.exports = {createUser, loginUser, getUser, getUsername }