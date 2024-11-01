// import React from 'react'
// import { BiSolidOffer } from "react-icons/bi";

// function Features() {
//   return (
//     <div className='py-5'>
//       <div className='services text-center mx-20 '>
//         <h1 className='text-white text-5xl font-semibold mt-20'>Features</h1>
//         <div className="grid grid-cols-5 mt-10 gap-3 ">
//             <div className="card-1 bg-blue-950 p-5 flex flex-col hover:shadow-2xl hover:scale-105 hover:text-blue-500 ">
//                 <BiSolidOffer className='text-[13rem]'/>
//             </div> 

//             <div className="card-1 bg-blue-950 p-5 flex flex-col hover:shadow-2xl hover:scale-105 hover:text-blue-500 ">
//                 <BiSolidOffer className='text-[13rem]'/>
//             </div> 

//             <div className="card-1 bg-blue-950 p-5 flex flex-col hover:shadow-2xl hover:scale-105 hover:text-blue-500 ">
//                 <BiSolidOffer className='text-[13rem]'/>
//             </div> 

//             <div className="card-1 bg-blue-950 p-5 flex flex-col hover:shadow-2xl hover:scale-105 hover:text-blue-500 ">
//                 <BiSolidOffer className='text-[13rem]'/>
//             </div> 

//             <div className="card-1 bg-blue-950 p-5 flex flex-col hover:shadow-2xl hover:scale-105 hover:text-blue-500 ">
//                 <BiSolidOffer className='text-[13rem]'/>
//             </div> 
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Features
import React from 'react';
import { FaDollarSign, FaMobileAlt, FaLock, FaClock, FaTrophy,FaUndoAlt } from 'react-icons/fa'; 
import {motion} from 'framer-motion'

function Features() {
  const features = [
    {
      icon: <FaDollarSign />,
      title: "Economical",
      description: "Affordable booking prices for all turfs.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Convenience",
      description: "Book turfs from anywhere at any time.",
    },
    {
      icon: <FaLock />,
      title: "Secure Booking",
      description: "Safe and secure payment options with Razorpay.",
    },
    {
      icon: <FaClock />,
      title: "Instant Confirmation",
      description: "Get immediate booking confirmation for your slots.",
    },
    {
      icon: <FaTrophy />,
      title: "Top-Quality Turfs",
      description: "We offer the best quality turfs for every match.",
    },
    {
        icon: <FaUndoAlt />,
        title: "Easy Cancellation",
        description: "Cancel bookings with ease and get refunds quickly.",
      }
  ];

  return (
    <div className="features-container px-10 py-20 bg-gray-900 text-white">
      <motion.h2  viewport={{once:true}} initial={{x:-70,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:0.1,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className="text-4xl font-bold text-center mb-10">Why Choose TurfX?</motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <motion.div
            viewport={{once:true}} initial={{x:-70,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:0.6,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}}
            key={index}
            className="bg-[#001242] p-8 rounded-lg flex flex-col items-center text-center shadow-lg hover:shadow-xl hover:shadow-blue-400 hover:scale-105 transition-shadow duration-300 transition-scale duration-400 cursor-pointer"
          >
            <div className="text-6xl mb-4 text-[#0094C6]">{feature.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Features;

