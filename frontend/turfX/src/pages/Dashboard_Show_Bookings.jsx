import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { FaCircleCheck } from "react-icons/fa6";
import { FaClockRotateLeft } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

function Dashboard_Show_Bookings() {
    const [bookings , setBookings] = useState([])
    const [turfStatus , updateStatus] = useState(bookings.status)
    const token = localStorage.getItem("owner_token")
    useEffect(()=>{
        const fetchBookings = async(req,res) =>{
            try {
                
                const response =  await axios.get("http://localhost:3000/api/dashboard/list_bookings",{
                    headers:{
                        'Authorization':`Bearer ${token}`
                    }
                })
                setBookings(response.data)   
            } catch (error) {
                console.log("Error from dashboard",error)
            }
        }
        fetchBookings()
    },[])

    const formatTime = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    };

    const handleStatus = async(e,bookingId) =>{
        const newStatus = e.target.value
        try {
            const response = await axios.post("http://localhost:3000/api/dashboard/updateStatus",{
                newStatus,
                bookingId
            },{
                headers:{
                    'Authorization':`Bearer ${token}`
                }
            }) 
            setBookings((prevBookings) =>
                prevBookings.map((booking) =>
                    booking._id === bookingId ? { ...booking, status: newStatus } : booking
                )
            );
            // updateStatus(turfStatus)
            toast.success("Status Updated Successfully")
        } catch (error) {
            
        }
        console.log(status)
    }
    

  return (
    <div className='flex-1 lg:ml-[20%] mt-24 p-5 x-20'>
        
        <div class="">
            <table class="text-sm w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Customer Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Turf Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Customer Contact
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Start Time
                        </th>
                        <th scope="col" class="px-6 py-3">
                            End Time
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Total Hours
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                {
                        Array.isArray(bookings) && bookings.length > 0 ? (
                            bookings.map((booking, index) => {
                                return (
                                    <>
                                    <tr key={index}>
                                        <td class="px-6 py-3">{booking.userId.username}</td>
                                        <td class="px-6 py-3">{booking.turf.turf_name}</td>
                                        <td class="px-6 py-3">{booking.userId.phone}</td>
                                        <td class="px-6 py-3">{formatTime(booking.startTime)}</td>
                                        <td class="px-6 py-3">{formatTime(booking.endTime)}</td>
                                        <td class="px-6 py-3">{booking.booking_hours}</td>
                                        <td class="px-6 py-3">
                                                <div className='flex items-center space-x-2'>
                                                <select
                                                    name="bookingStatus"
                                                    onChange={(e) => handleStatus(e, booking._id)} // Pass booking._id here
                                                    value={booking.status} // Keep this as the booking status string
                                                >
                                                    <option value="confirm">Confirm</option>
                                                    <option value="pending">Pending</option>
                                                    <option value="cancelled">Cancelled</option>
                                                </select>
                                                
                                                {/* Render the appropriate icon based on the status */}
                                                {booking.status === 'confirm' ? (
                                                    <FaCircleCheck className='text-green-600 text-lg font-bold' />
                                                ) : booking.status === 'pending' ? (
                                                    <FaClockRotateLeft className='text-yellow-400 text-lg font-bold' />
                                                ) : (
                                                    <MdCancel className='text-red-500 text-lg font-bold' />
                                                )}
                                                </div>
                                        </td>
                                    </tr>
                                    </>
                                )
                            })
                        ) : (
                            <p>No Bookings</p>
                        )
                    }
            </tbody>
            </table>
        </div>

    </div>
  )
}

export default Dashboard_Show_Bookings
