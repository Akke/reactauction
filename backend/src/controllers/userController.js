const User = require('../models/userModel')

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


module.exports = createUser