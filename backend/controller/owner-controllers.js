const Owner = require("../models/owner-model");
const bcrypt = require("bcrypt")
const Turf = require("../models/turf-model")

const home = async (req, res) => {
  try {
    return res.status(200).send("home page");
  } catch (error) {
    res.status(404).send("Error");
  }
};

const register = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;

    const ownerExist = await Owner.findOne({ email: email });
    if (ownerExist) {
      return res.status(400).json({ message: "User Already Exist !!!" });
    }

    const ownerCreated = await Owner.create({
      username,
      email,
      password,
      phone,
    });
    console.log(req.body);
    res
      .status(201)
      .json({
        msg: "Registration Successful as Owner",
        token: await ownerCreated.generateToken(),
        userId: ownerCreated._id.toString(),
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
        const ownerExist = await Owner.findOne({email})

        if(!ownerExist){
            return res.status(400).json({msg:"Invalid Email or Password"})
        }

        const owner = ownerExist.comparePassword(password)

        if(owner){
            res.status(202).json({
                msg:"Login Successful as Owner",
                token:await ownerExist.generateToken(),
                userId:ownerExist._id.toString()
            })
        }else{
            return res.status(400).json({msg:"Invalid Email or Password"})
        }

    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json("Login Error")
    }
}


const owner = async(req,res) =>{
  try {
    const ownerData = req.user
    // console.log(ownerData)
    return res.status(200).json({ownerData})
    // res.status(200).json({msg:"User Data Fetched Successfully"})
  } catch (error) {
    console.log(error)
  }
}

const listTurf = async (req, res) => {
  try {
      const turfs = await Turf.find(); 
      return res.status(200).json(turfs);
  } catch (error) {
      return res.status(500).json({
          message: 'Error fetching turfs',
          error: error.message
      });
  }
};





module.exports = { home, register,login,owner,listTurf};