const jwt = require('jsonwebtoken')
const User = require("../models/user-model")

const authMiddleware = async(req,res,next) => {
    const token = req.header('Authorization')
    if(!token) return res.status(401).send('Access denied. No token provided')
    const jwtToken = token.replace('Bearer',"").trim()
    console.log(jwtToken)
    try {
        const isVerified = jwt.verify(jwtToken,"kasim")
        console.log(isVerified)
        const userData = await User.findOne({'email':isVerified.email}).select({password:0}
        )
        req.user = userData
        req.token = token
        req.userId = userData._id
        next()
    }
    catch{
        res.status(400).send('Invalid token')
    }
   
}

module.exports = authMiddleware