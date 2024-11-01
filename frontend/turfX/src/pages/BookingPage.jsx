import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { AuthContext } from '../store/auth'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
// NavLink

function BookingPage() {
    const {user} = useContext(AuthContext)
    const [booking , setBooking] = useState({
        bookingDate:"",
        startTime:"",
        endTime:"",
        hours:""
    })

    const {id} = useParams()
    // if(id){
    //     toast.success(id)
    // }
    const handleChange = (e) =>{
        const {name , value} = e.target
        setBooking({...booking , [name] : value})
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try {
            const token = localStorage.getItem("token")
            const response = await axios.post('http://localhost:3000/api/booking/bookTurf' ,{
                bookingDate:booking.bookingDate ,
                startTime:booking.startTime ,
                endTime:booking.endTime ,
                hours:booking.hours ,
                turfId:id,
            },{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }).then(()=>{
                setBooking({
                    bookingDate:"",
                    startTime:"",
                    endTime:"",
                    hours:""
                })
                toast.success("Booking Successful")
            }).catch ((error)=>{
                toast.error("Booking Failed")
            })

            // console.log(response.data)
            // toast.success("Booking Request Sent ! Successfully ! ")
        } catch (error) {
            console.log(error)
        }
        

    }

    // useEffect(()=>{
    //     const fetchTurfDetails = async() =>{
    //         axios.get('http://localhost:3000/api/home/turf/')
    //     }
    // })

  return (
    <div className="px-20  bg-gray-100 h-screen pt-1">
        <div className='container mt-44 flex gap-20'>
            <div className='booking-form border-4 h-[35rem] w-[40rem] bg-white rounded-xl border-[#001242]'>
                <div className='flex flex-col p-5'>
                    <h1 className='text-3xl font-bold'>CoverDrive Turf</h1>
                    <p className='text-md text-gray-500 font-semibold'>Book your pitch now!</p>
                </div>

                <div className='w-full mt-1 bg-[#001242] h-[3rem]'>
                    <div className='flex justify-between items-center p-2'>
                        <div className='text-white text-lg font-bold'>Booking Form</div>
                    </div>
                </div>

                <form action="" onSubmit={handleSubmit}>

                <div className='p-5'>
                    <div className='grid grid-cols-2 items-center'>
                        <div>
                            <label className='text-xl text-black font-bold'>Date :</label>
                        </div>
                        <div>
                            <input type="date" className="w-full h-[3rem] border-2 border-
                            [gray-400] rounded-lg p-2 mt-2" onChange={handleChange} name="bookingDate" value={booking.bookingDate} />
                        </div>
                    </div>

                    <div className='grid grid-cols-2 items-center mt-3'>
                        <div>
                            <label className='text-xl text-black font-bold'>Starting Time :</label>
                        </div>
                        <div>
                            <input type="time" className="w-full h-[3rem] border-2 border-
                            [gray-400] rounded-lg p-2 mt-2" onChange={handleChange} name="startTime" value={booking.startTime}/>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 items-center mt-3'>
                        <div>
                            <label className='text-xl text-black font-bold'>End Time :</label>
                        </div>
                        <div>
                            <input type="time" className="w-full h-[3rem] border-2 border-
                            [gray-400] rounded-lg p-2 mt-2" onChange={handleChange} name="endTime"  value={booking.endTime}/>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 items-center mt-3'>
                        <div>
                            <label className='text-xl text-black font-bold'>Booking Hours :</label>
                        </div>
                        <div>
                            <input type="number" className="w-full h-[3rem] border-2 border-
                            [gray-400] rounded-lg p-2 mt-2" onChange={handleChange} name="hours" value={booking.hours}/>
                        </div>
                    </div>

                    

                    <div className='text-center mt-10'>
                        <button className='bg-[#001242] p-3 text-white rounded-sm hover:bg-blue-800 hover:rounded-xl'>
                            Book My Slot
                        </button>
                    </div>

                </div>

                </form>

            </div>

            <div className='booking-form border-4 h-[35onChange={handleChange}rem] w-[40rem] p-5 rounded-xl bg-[#001242] border-[#001242] items-center justify-center flex'>
                <NavLink to={'/track_my_bookings'}>
                    <h1 className='text-7xl font-bold text-white text-center'>
                        Track <br /> Your <br /> Bookings 
                    </h1>
                </NavLink>
                
            </div>
        </div>
      
    </div>
  )
}

export default BookingPage
