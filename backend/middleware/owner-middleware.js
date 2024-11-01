const jwt = require('jsonwebtoken')
const Owner = require("../models/owner-model")

const ownerMiddleware = async(req,res,next)=>{
    const owner_token = req.header("Authorization")

    if(!owner_token) return res.status(401).send("Access denied. No token provided.")


    const jwtToken = owner_token.replace('Bearer',"").trim()
    console.log("token", jwtToken)
    

    try {

        const isVerified = jwt.verify(jwtToken,"process.env.JWT_SECRET_KEY")
        console.log("isVerifed",isVerified)

        const ownerData = await Owner.findOne({
            email:isVerified.email
        }).select({password:0})
        
        console.log("ownerData",ownerData)

        req.user = ownerData
        req.token = owner_token
        req.userId = ownerData._id

        next()

    } catch (error) {
        res.status(400).send({ message: "Unauthorized Invalid Token" })
    }


}

module.exports = ownerMiddleware