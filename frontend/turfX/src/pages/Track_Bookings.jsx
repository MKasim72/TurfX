import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { FaClockRotateLeft } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";


function Track_Bookings() {
    const [myBookings , setMyBookings] = useState([])
    useEffect(()=>{
        const fetchMyBookings = async() =>{
            try {
                
                const token = localStorage.getItem("token")
                const response = await axios.get("http://localhost:3000/api/track_bookings/myBookings",{
                    headers:{
                        "Authorization": `Bearer ${token}`
                        }
                    })
                setMyBookings(response.data)
            } catch (error) {
                console.log("cant fetch bookings ",error)
            }
        }
        fetchMyBookings()
    },[])

    const formatTime = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    };
    
    

  return (
    <div className='mt-44 p-8'>
      
        <div class="overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Turf Name
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
                    Array.isArray(myBookings) && myBookings.length > 0 ? (
                        myBookings.map(booking => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {booking.turf.turf_name}
                                </th>
                                <td class="px-6 py-4">
                                    {formatTime(booking.startTime)}
                                </td>
                                <td class="px-6 py-4">
                                    {formatTime(booking.endTime)}
                                </td>
                                <td class="px-6 py-4">
                                    {booking.booking_hours} hours
                                </td>
                                <td class="px-6 py-4 flex items-center gap-4 text-md">
                                    {booking.status == 'confirm' ? <FaCircleCheck className='text-green-600'/> : booking.status == 'pending' ? <FaClockRotateLeft className='text-yellow-200'/> : <MdCancel className='text-red-500'/>}
                                    {booking.status}
                                </td>
                            </tr>
                        ))
                        ) : (
                        <p>No turfs available.</p>
                        )
                    }
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default Track_Bookings
