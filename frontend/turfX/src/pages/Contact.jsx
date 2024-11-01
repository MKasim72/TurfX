import React, { useContext, useState,useEffect } from 'react'
import { IoCall } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AuthContext } from '../store/auth';
import axios from 'axios';
import {motion} from 'framer-motion'
import { toast } from 'react-toastify';

function Contact() {
  const {user} = useContext(AuthContext)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [userData , setUserData] = useState(true)
  if(userData && user){
    setFormData({
      name: user.username,
      email: user.email,
      message:""
    })
    setUserData(false)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async(e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('http://localhost:3000/api/contact',{
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         },
  //       body: JSON.stringify(formData),
  //     })
  //     if(response.ok){
  //       console.log(await response.json())
  //       toast.success('Your message has been sent')
  //     }
  //   } catch (error) {
      
  //   }

  //   setFormData({
  //     name: '',
  //     email: '',
  //     message: '',
  //   });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/contact/contact', formData);
  
      if (response.status === 201) {
        console.log(response.data);
        toast.success('Your message has been sent');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className='bg-[#001242] h-screen pt-1 px-20 items-center'>
      <div className='mt-44'>
        <div className="grid grid-cols-2 gap-5">
          <div className='welcome-txt'>
            <div className="text-white text-4xl font-bold">
              <motion.h1 viewport={{once:true}} initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:0.6,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}}>Contact Us</motion.h1>
              <motion.p viewport={{once:true}} initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:0.8,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className='text-lg font-serif font-thin mt-3 text-gray-300 leading-loose'>" We're here to help! Whether you're looking to book a turf or need assistance with your account, our team is ready to assist you. Feel free to reach out and let's make your TurfX experience seamless and enjoyable. We’d love to hear from you! "</motion.p>
            </div>
            <div>
            <motion.div viewport={{once:true}} initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className="text-white font-bold mt-[8rem]">
                <div className="flex flex-col space-y-6 gap-5">
                  <div className="icon inline-flex gap-5 items-center">
                    <IoCall className='text-teal-300 text-2xl'/>
                    <h1 className='text-xl'>+91 8484999188</h1>
                  </div>

                  <div className="icon inline-flex gap-5 items-center">
                    <BiLogoGmail className='text-teal-300 text-2xl'/>
                    <h3 className='text-2xl'>kasimkausari24@gmail.com</h3>
                  </div>

                  <div className="icon inline-flex gap-5 items-center">
                    <FaMapMarkerAlt className='text-teal-300 text-2xl'/>
                    <h2 className='text-2xl'>Ahmedabad , India</h2>
                  </div>
                </div>
            </motion.div>
            </div>
          </div>

          <motion.div viewport={{once:true}} initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className='form border rounded-lg h-[30rem] bg-white p-5'>
            <form action="" onSubmit={handleSubmit}>
              <motion.div viewport={{once:true}} initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className='mt-5'>
                <label htmlFor="" className='text-gray-700 font-bold'>Your Name</label>            
                <input className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none
                focus:ring-2 focus:ring-teal-300' placeholder="Enter your Name" type="text" name="name"
                value={formData.username} onChange={handleChange} 
                />
              </motion.div>

              <motion.div viewport={{once:true}} initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className='mt-5'>
                <label htmlFor="" className='text-gray-700 font-bold'>Email Address</label>            
                <input  className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none
                focus:ring-2 focus:ring-teal-300 'placeholder="Email Address" type="email" name="email"
                value={formData.email} onChange={handleChange}/>
              </motion.div>

              <motion.div viewport={{once:true}} initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className='mt-5'>
                <label htmlFor="" className='text-gray-700 font-bold'>Message</label>            
                <textarea name="message" id="" rows="4" className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none
                focus:ring-2 focus:ring-teal-300' placeholder='Write Your Message' onChange={handleChange} value={formData.message}></textarea>
              </motion.div>

              <motion.div viewport={{once:true}} initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:0.5},
            ease:"easeIn",
            duration:1}} className='flex justify-end'>
                <button className='bg-[#001242ea] hover:bg-teal-400 text-white font-bold
                py-2 px-4 rounded-md mt-5'>Send Message</button>
              </motion.div>
            </form>
          </motion.div>

        </div>
      </div>
      
    </div>
  )
}

export default Contact