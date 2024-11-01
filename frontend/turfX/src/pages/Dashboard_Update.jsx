import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { OwnerContext } from '../store/owner';
import axios from 'axios';
import { toast } from 'react-toastify';
function Dashboard_Update() {

    const {user} = useContext(OwnerContext)
    const {id} = useParams()
  
    const [turf, setTurf] = useState({
      username:user.username,
      turf_name: '',
      location: '',
      description: '',
      images: '',
      type:"",
      price:""
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setTurf({
        ...turf,
        [name]: value,
      });
    };

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try {
            const token = localStorage.getItem('owner_token')
            const response = await axios.patch(`http://localhost:3000/api/dashboard/updateTurf/${id}`,turf,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (response.status === 200) {
                toast.success('Turf created successfully!');
                setTurf({ turf_name: '', location: '', description: '', images: '' });
              } else {
                console.log(response)
                toast.error('Failed to create turf.');
              }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        const fetchTurf = async () => {
            try {
                const token = localStorage.getItem('owner_token')
                const response  = await axios.get(`http://localhost:3000/api/dashboard/getSingleTurf/${id}`,{
                    headers: {
                        Authorization:`Bearer ${token}`
                    }
                })
                setTurf(response.data)
            }
            catch (error) {
                console.error(error);
            }
        }

        fetchTurf()
    },[])

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
  
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
    <form onSubmit={handleSubmit} className="bg-white ml-[20rem] p-6 rounded-lg shadow-lg w-[70rem] min-w-xl">
      
      <h2 className="text-2xl font-bold text-center mb-5">Update Turf</h2>

      <div className="grid grid-cols-2 gap-5">

        <div className="firstDiv">
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={turf.username}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter username"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Turf Name</label>
            <input
              type="text"
              name="turf_name"
              value={turf.turf_name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter turf name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={turf.location}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter location"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={turf.description}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter description"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Detailed Description</label>
            <textarea
              name="detailed_description"
              value={turf.detailed_description}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              rows="7"
              placeholder="Enter detailed description"
            />
          </div>
        </div>

        <div className="secondDiv">
            <div className="mb-4">
            <label className="block text-gray-700">Iframe Map</label>
            <input
              type="text"
              name="iframe_map"
              value={turf.iframe_map}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter iframe map URL or code"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Amenities (comma separated)</label>
            <input
              type="text"
              name="amenities"
              value={turf.amenities}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter amenities (e.g., Parking, Washroom)"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Sports Available (comma separated)</label>
            <input
              type="text"
              name="sports_available"
              value={turf.sports_available}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter available sports (e.g., Cricket, Football)"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={turf.price}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter price"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Type</label>
            <input
              type="text"
              name="type"
              value={turf.type}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter type (Box, Open Ground)"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Images (comma separated URLs)</label>
            <input
              type="text"
              name="images"
              value={turf.images}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter image URLs"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Enter Turf Timings</label>
            <input
              type="text"
              name="timing"
              value={turf.timing}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter Your Turf Timings"
            />
          </div>

        </div>

      </div>

     
      
      <button type="submit" className="w-full bg-green-600 hover:bg-green-900 text-white font-bold py-2 rounded">
        Update Turf
      </button>
    </form>
  </div>
  )
}

export default Dashboard_Update
