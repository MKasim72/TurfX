const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");


const ownerSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    createdAt: { type: Date, default: Date.now },
    turfs : [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Turf',
    }],
    bookings : [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Booking',
    }]
})

ownerSchema.pre('save',async function(next){
    const owner = this
    if(!owner.isModified('password')){
        next()
    }
    try {
        // password hashing
        const saltRound = await bcrypt.genSalt(10)
        const hash_password = await bcrypt.hash(owner.password,saltRound)
        owner.password = hash_password
    } catch (error) {
        next(error)
    }
})

ownerSchema.methods.generateToken = function(){
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
        },"process.env.JWT_SECRET_KEY",{
            expiresIn:"30d"
        })
    } catch (error) {
        console.log(error)
    }
}

ownerSchema.methods.comparePassword = function(password){
    try {
        
        return bcrypt.compare(password,this.password)

    } catch (error) {
        console.log(error)
    }
}

const Owner = new mongoose.model("Owner",ownerSchema) 
module.exports = Owner