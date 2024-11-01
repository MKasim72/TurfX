const User = require("../models/user-model");
const bcrypt = require("bcrypt")

const home = async (req, res) => {
  try {
    res.status(200).send("home page");
  } catch (error) {
    res.status(404).send("Error");
  }
};

const register = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;

    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ message: "User Already Exist !!!" });
    }

    const userCreated = await User.create({
      username,
      email,
      password,
      phone,
    });
    console.log(req.body);
    res
      .status(201)
      .json({
        msg: "Registration Successful as User",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
  } catch (error) {
    console.error(error); 
    res.status(500).send({message:error.message})
    // res.status(500).json({ msg: "Server Error", error: error.message });
  }
};

const login = async(req,res)=>{
    try {

        const {email,password} = req.body
        const userExist = await User.findOne({email})

        if(!userExist){
            return res.status(400).json({msg:"Invalid Email or Password"})
        }

        const user = userExist.comparePassword(password)

        if(user){
            res.status(202).json({
                msg:"Login Successful as User",
                token:await userExist.generateToken(),
                userId:userExist._id.toString()
            })
        }else{
            return res.status(400).json({msg:"Invalid Email or Password"})
        }

    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json("Login Error")
    }
}

const user = async(req,res) =>{
  try {
    
    const userData = req.user
    console.log(userData)
    return res.status(200).json({userData})
    // res.status(200).json({msg:"User Data Fetched Successfully"})
  } catch (error) {
    console.log(error)
  }
}

module.exports = { home, register,login,user };
