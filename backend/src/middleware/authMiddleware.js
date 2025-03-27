require("dotenv").config();
const jwt = require('jsonwebtoken')

const verifyAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    let token = null
    if(req.cookies.accessToken){
        token = req.cookies.accessToken
    }else{
        if(!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Authorization token missing or invalid." });
        }
    
        token = authHeader.split(" ")[1];
    }
    

    try {
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verifyToken;
        next();
    } catch(error) {
        console.log(error);
        return res.status(401).json({ message: "Authorization token invalid or expired." });
    }
}

module.exports = {
    verifyAuth
}