const Turf = require('../models/turf-model')
const Owner = require("../models/owner-model")
const bookingModel = require('../models/booking-model')
const { populate } = require('../models/contact-model')
// const { OwnerContext } = require('../../frontend/turfX/src/store/owner')

const home = (req,res) =>{
    try {
        return res.status(200).json("Home Hello")
        
    } catch (error) {
        console.log(error)   

    }
}

// const addTurf = async (req, res) => {
//     try {
//         console.log("hello")
//         const { username, turf_name, location, description, images ,price , type} = req.body;

//         // Fetch the owner associated with the username
//         const owner = await Owner.findOne({ username }); // Look up by username

//         if (!owner) {
//             return res.status(404).json({ message: "Owner not found for this username" });
//         }

//         // Create a new Turf entry
//         const turf = await Turf.create({
//             owner: owner._id, // Use the owner ID retrieved from the Owner model
//             turf_name,
//             location,
//             description,
//             images,
//             price,
//             type
//         });

//         // Optionally, push the turf ID to the owner's turfs array
//         owner.turfs.push(turf._id);
//         await owner.save();

//         return res.status(201).json({ message: "Turf Added", turf });
//     } catch (err) {
//         console.error(err); // Log the error for debugging
//         return res.status(422).json({ message: "Error in adding Turf", error: err.message });
//     }
// };
const addTurf = async (req, res) => {
    try {
        console.log("Adding new turf...");
        const { 
            username, 
            turf_name, 
            location, 
            description, 
            detailed_description, 
            iframe_map, 
            amenities, 
            sports_available, 
            images, 
            price, 
            type,
            timing 
        } = req.body;

        // Fetch the owner associated with the username
        const owner = await Owner.findOne({ username }); // Look up by username

        if (!owner) {
            return res.status(404).json({ message: "Owner not found for this username" });
        }

        // Create a new Turf entry
        const turf = await Turf.create({
            owner: owner._id, // Use the owner ID retrieved from the Owner model
            turf_name,
            location,
            description,
            detailed_description, // New field for a more detailed description
            iframe_map, // New field for the iframe map
            amenities, // Expecting array of amenities (comma-separated in frontend)
            sports_available, // Expecting array of sports (comma-separated in frontend)
            images, // Expecting array of image URLs (comma-separated in frontend)
            price,
            type,
            timing
        });

        // Optionally, push the turf ID to the owner's turfs array
        owner.turfs.push(turf._id);
        await owner.save();

        return res.status(201).json({ message: "Turf Added", turf });
    } catch (err) {
        console.error(err); // Log the error for debugging
        return res.status(422).json({ message: "Error in adding Turf", error: err.message });
    }
};


// const listTurf = async(req,res) =>{

//     try {
        
//         const turfs = await Turf.find({_id:Owner._id}).populate('owner')
//         return res.status(200).json(turfs)

//     } catch (error) {
//         res.status(500).json({
//             message: "Error fetching Turfs",
//             error: error.message
//         })
//     }
// }
// const listTurf = async (req, res) => {
//     try {
//         const turfs = await Turf.find(); 
//         return res.status(200).json(turfs);
//     } catch (error) {
//         return res.status(500).json({
//             message: 'Error fetching turfs',
//             error: error.message
//         });
//     }
// };
// const listTurf = async (req, res) => {
//     try {
//         const turfs = await Turf.find().populate("owner");
//         console.log("Turfs fetched: ", turfs); // Log the turfs fetched
//         return res.status(200).json(turfs);
//     } catch (error) {
//         console.error('Error fetching turfs:', error.message);
//         return res.status(500).json({
//             message: 'Error fetching turfs',
//             error: error.message
//         });
//     }
//   };

// const listTurf = async (req, res) => {
//     try {
//         // Assuming owner ID is available from authentication middleware (e.g., req.user._id)
//         const ownerId = req.user._id; // or req.user.id depending on how it's stored
        
//         console.log(ownerId)
//         // Fetch only the turfs created by the logged-in owner
//         const turfs = await Turf.find({ owner: ownerId }).populate("owner");

//         // Log the turfs fetched for debugging
//         console.log("Turfs fetched for owner:", ownerId, turfs);

//         return res.status(200).json(turfs);
//     } catch (error) {
//         console.error('Error fetching turfs:', error.message);
//         return res.status(500).json({
//             message: 'Error fetching turfs',
//             error: error.message
//         });
//     }
// };

const listTurf = async (req, res) => {
    try {
        const ownerId = req.user._id; // Assuming you're using middleware to get the logged-in user
        const turfs = await Turf.find({ owner: ownerId }).populate("owner");
        return res.status(200).json(turfs);
    } catch (error) {
        console.error('Error fetching turfs:', error.message);
        return res.status(500).json({
            message: 'Error fetching turfs',
            error: error.message
        });
    }
};


const list_Bookings = async(req,res) =>{
    try {
        const ownerId = req.user._id
        if(ownerId){
            const owner = await Owner.find({_id:ownerId})
            const all_bookings = await Owner.findById(ownerId).populate({
                path: 'bookings',
                populate: [{
                    path: 'turf',
                    model: 'Turf',
                },{
                    path: 'userId',
                    model: 'User',
                    select:'username phone'
                }]
            })
            return res.status(200).json(all_bookings.bookings)
        }
        else{
            return res.status(401).json({message: "Unauthorized"})
        }

    } catch (error) {
        console.log(error)
    }

}

// const updateStatus = async(req,res) =>{
//     try {
//         const ownerId = req.user._id
//         const {bookingId , newStatus} = req.body

//         const booking = await bookingModel.findById(bookingId).populate('turf')

//         if(!booking){
//             return res.status(404).json({message: "Booking not found"})
//         }
//         if(booking.userId.toString() !== ownerId.toString()){
//             return res.status(401).json({message: "You have no access to update status"})
//         }
//         if(booking.status === newStatus){
//             return res.status(400).json({message: "Status already updated"})
//         }
//         booking.status = newStatus
//         await booking.save()
//         return res.status(200).json({message: "Status updated successfully"})
//     }
//     catch(error){
//         console.log(error)
//         return res.status(401).json({message: "Cannot Update Status"})
//     }
// }

const updateStatus = async (req, res) => {
    try {
        const ownerId = req.user._id; // Owner ID from authentication
        const { bookingId, newStatus } = req.body;

        // Find the booking and populate the associated turf details
        const booking = await bookingModel.findById(bookingId).populate('turf');

        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        // Ensure that the owner of the turf is the one making the request
        if (booking.turf.owner.toString() !== ownerId.toString()) {
            return res.status(401).json({ message: "You have no access to update this booking's status" });
        }

        // Check if the status is already the same as the new status
        if (booking.status === newStatus) {
            return res.status(400).json({ message: "Status is already updated to the same value" });
        }

        // Update the status of the booking
        booking.status = newStatus;
        await booking.save();

        return res.status(200).json({ message: "Status updated successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Cannot update status" });
    }
};

  
// const deleteTurf = async(req,res) =>{
//     try{
//         const ownerId = req.user._id; // Owner ID from authentication
//         const turf_id = req.params.id

//         if(ownerId){
//             const owner_turf = await Turf.findByIdAndDelete({_id:turf_id})
//             if(!owner_turf){
//                 return res.status(404).json({message: "Turf not found"})
//             }
//             return res.status(200).json({message: "Turf deleted successfully"})
//         }


//      }catch(error){
//         console.log(error)
//         return res.status(500).json({ message: "Cannot delete turf from backend",error});
//      }
// }
const deleteTurf = async (req, res) => {
    try {
        const ownerId = req.user._id; // Owner ID from authentication
        const turf_id = req.params.id;

        // Step 1: Find and delete the turf
        const turf = await Turf.findById(turf_id);
        if (!turf) {
            return res.status(404).json({ message: "Turf not found" });
        }

        // Step 2: Check if the authenticated user is the owner of the turf
        if (turf.owner.toString() !== ownerId.toString()) {
            return res.status(403).json({ message: "Not authorized to delete this turf" });
        }

        // Step 3: Delete bookings related to the turf
        await bookingModel.deleteMany({ turf: turf_id });

        // Step 4: Remove turf from the owner's turfs array
        await Owner.updateOne(
            { _id: ownerId },
            { $pull: { turfs: turf_id } }
        );

        // Step 5: Delete the turf itself
        await Turf.findByIdAndDelete(turf_id);

        return res.status(200).json({ message: "Turf and related bookings deleted successfully" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Cannot delete turf from backend", error });
    }
};


const getSingleTurf = async(req,res) =>{
    try {
        const ownerId = req.user._id
        const turf_id = req.params.id

        if(!ownerId){
            return res.status(404).json({message: "Turf not found"})
        }
        const data = await Turf.findOne({_id:turf_id})
        if(!data){
            return res.status(404).json({message: "Turf not found"})
        }
        return res.status(200).json(data)

    } catch (error) {
        console.log(error)
    }
}

const updateTurf = async(req,res)=>{
    try{

        const id = req.params.id
        const ownerId = req.user._id

        if(!ownerId){
            return res.status(404).json({message: "Turf not found"})
        }
        const data = req.body
        const updateTurf = await Turf.updateOne({
            _id:id
        },{
            $set:data
        })
        if(!updateTurf){
            return res.status(404).json({message: "Turf not found"})
        }
        return res.status(200).json({message: "Turf updated successfully"})


    }
    catch(error){
        console.log(error)
    }
}

module.exports = {home,addTurf,listTurf,list_Bookings,updateStatus,deleteTurf,getSingleTurf,updateTurf}
