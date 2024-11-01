    const express = require("express")
    const bookingModel = require('../models/booking-model')
    const turfModel = require("../models/turf-model")
    const userModel = require('../models/user-model')
    const ownerModel = require('../models/owner-model')

    const home = (req,res) =>{
        res.send("hrllo from booking")
    }


   
    const bookTurf = async(req, res) => {
        try {
            const { bookingDate, status, startTime, endTime, turfId,hours } = req.body;
            const userId = req.user._id;
    
            // Fetch turf and ensure it's found
            const turf = await turfModel.findById(turfId); // Add await here
            if (!turf) {
                return res.status(400).send({ message: "Turf not found" });
            }
    
            const ownerId = turf.owner; // Assuming each turf has an associated owner

            const owner = await ownerModel.findById(ownerId);
            if (!owner) {
                return res.status(400).send({ message: "Owner not found" });
            }
            
            const startDateTime = new Date(`${bookingDate}T${startTime}`);
            const endDateTime = new Date(`${bookingDate}T${endTime}`);
            // Create a new booking
            const newBooking = new bookingModel({
                bookingDate:bookingDate,
                status: status || 'pending', // Default status
                startTime:startDateTime,
                endTime:endDateTime,
                turf: turfId,
                userId: userId,
                owner: ownerId,
                booking_hours:hours
            });
    
            // Save the new booking to the database
            await newBooking.save();

            owner.bookings.push(newBooking._id)
            await owner.save()

    
            return res.status(201).send({ message: "Booking Request Sent Successfully" });
    
        } catch (error) {
            console.error("Error from booking:", error); // Log the error
            res.status(500).send("Error from booking");
        }
    };
    
    const trackBookings = async (req, res) => {
        const userId = req.user._id;
        try {
            const bookings = await bookingModel.find({ userId: userId })
                .populate("turf", "turf_name location");
            res.send(bookings);
        } catch (error) {
            res.status(500).send({ message: "Error fetching bookings" });
        }
    };
    

    module.exports = {home,bookTurf,trackBookings}