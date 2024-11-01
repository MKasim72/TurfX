const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Owner',
    },
    turf : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Turf',
    },
    bookingDate: {
        type: Date,
        required : true,
    },
    status :{
        type : String ,
        enum : ['pending' , 'confirm' , 'cancelled'],
        default : 'pending',
    },
    startTime:{
        type : Date ,
        required : true ,
    },
    endTime:{
        type : Date ,
        required : true ,
    },
    booking_hours:{
        type : Number ,
        required : true ,
    }
})

const Booking = new mongoose.model("Booking",bookingSchema)

module.exports = Booking