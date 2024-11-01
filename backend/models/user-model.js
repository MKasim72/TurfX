const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
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
    }
})

userSchema.pre('save',async function(next){
    const user = this
    if(!user.isModified('password')){
        next()
    }
    try {
        // password hashing
        const saltRound = await bcrypt.genSalt(10)
        const hash_password = await bcrypt.hash(user.password,saltRound)
        user.password = hash_password
    } catch (error) {
        next(error)
    }
})

userSchema.methods.generateToken = function(){
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email
        },"kasim",{
            expiresIn:"30d"
        })
    } catch (error) {
        console.log(error)
    }
}

userSchema.methods.comparePassword = function(password){
    try {
        
        return bcrypt.compare(password,this.password)

    } catch (error) {
        console.log(error)
    }
}

const User = new mongoose.model("User",userSchema) 
module.exports = User