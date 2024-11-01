const express = require("express")
const Turf = require("../models/turf-model")

// const list_all = async(req,res) =>{
//     try {
//         const turfs = await Turf.find()
//         return res.json(turfs)
//     } catch (error) {
//         return res.status(500).json({ message: "Error fetching turfs" })
//     }
// }
const list_all = async (req, res) => {
    const { search } = req.query; // Get the search query from the request
  
    try {
      let query = {};
  
      // Check if search query exists and build the filter
      if (search) {
        query = {
          $or: [
            { turf_name: { $regex: search, $options: 'i' } }, // Search by turf name
            { location: { $regex: search, $options: 'i' } }   // Search by location (city)
          ]
        };
      }
  
      const turfs = await Turf.find(query);
      return res.status(200).json(turfs);
    } catch (error) {
      console.error('Error fetching turfs:', error.message);
      return res.status(500).json({
        message: 'Error fetching turfs',
        error: error.message
      });
    }
  };
  
  

const getTurfById = async (req, res) => {
    try {
        const turfId = req.params.id;
        console.log(turfId)
        const turf = await Turf.findById(turfId);

        if (!turf) {
            return res.status(404).json({ message: "Turf not found" });
        }

        return res.status(200).json(turf);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching turf", error: error.message });
    }
};

const getTurfDetails = async (req,res) =>{
    try {
      const turfId = req.params.id
      const turf = await Turf.findById(turfId)

      
      if (!turf) {
        return res.status(404).json({ message: "Turf not found" });
    }

      return res.status(200).json(turf);


    } catch (error) {
      return res.status(500).json({ message: "Error fetching turf", error: error.message });
    }
}

module.exports = {list_all,getTurfById,getTurfDetails}