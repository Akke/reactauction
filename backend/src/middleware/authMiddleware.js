require("dotenv").config();

const verifyAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Authorization token missing or invalid." });
    }

    const token = authHeader.split(" ")[1];

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