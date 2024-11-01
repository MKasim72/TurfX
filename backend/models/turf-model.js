// const mongoose = require("mongoose")
// const turfSchema = new mongoose.Schema({
//     // userId: {
//     //     type: mongoose.Schema.Types.ObjectId,
//     //     ref: 'User',
//     //     },
//     // email:{
//     //     type:String,
//     //     required:true   
//     // },
//     owner:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Owner',
//     },
//     booking:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref:"Booking"
//     },
//     turf_name:{
//         type:String,
//         required:true
//     },
//     location:{
//         type:String,
//         required:true
//     },
//     description:{
//         type:String,
//         required:true,
//     },
//     createdAt:{
//         type:Date,
//         default:Date.now
//     },
//     images:[
//         {
//             type:String,
//             required:true,
//         }
//     ],
//     price:{
//         type:Number,
//         required:true
//     },
//     type:{
//         type:String,
//         required:true        
//     },
//     // map:{
//     //     type:String,
//     //     required:true
//     // },
//     // detailed_desc :{
//     //     type:String,
//     //     required:true
//     // },
//     // available_sports:
//     // {
//     //     type: [String],
//     //     required:true
//     // },
//     // amenities:{
//     //     type: [String],
//     //     required:true,
//     //     enum:[]
//     // }
    
// })

// const Turf = new mongoose.model("Turf",turfSchema)

// module.exports = Turf

const mongoose = require("mongoose");

const turfSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Owner',
  },
  booking: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking",
  },
  turf_name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  detailed_description: {
    type: String,
    required: false,  // This will store the longer, detailed description
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  iframe_map: {
    type: String,  // This will store the iframe embed code for the map
    required: false,
  },
  amenities: [
    {
      type: String,  // List of amenities like 'Parking', 'Washroom', etc.
    }
  ],
  sports_available: [
    {
      type: String,  // List of sports like 'Cricket', 'Football', etc.
    }
  ],
  timing:{
    type: String,
    required:true
  }
});

const Turf = mongoose.model("Turf", turfSchema);
module.exports = Turf;
