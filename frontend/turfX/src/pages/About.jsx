// import React from 'react';

// const AboutUs = () => {
//   return (
//     <div className='w-full px-20 py-8 fixed flex justify-between items-center bg-[#001242] mb-10'>
// //     <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-10">
// //       <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6 mt-32">
// //         <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
// //         <p className="text-lg text-gray-700 mb-4">
// //           Welcome to TurfX, your ultimate destination for booking box cricket slots! 
// //           As the developer of this website, I have poured my passion for technology 
// //           and sports into creating a seamless experience for cricket enthusiasts like you. 
// //           TurfX aims to provide a user-friendly platform that connects players and turf 
// //           owners, making it easier than ever to enjoy the game.
// //         </p>
        // <p className="text-lg text-gray-700 mb-4">
        //   At TurfX, we believe in promoting sports and fostering community through 
        //   friendly matches. Our mission is to provide a reliable platform where players 
        //   can effortlessly find and book their favorite cricket turfs, while owners can 
        //   manage their venues with ease.
        // </p>
        // <p className="text-lg text-gray-700 mb-4">
        //   Join us on this exciting journey to elevate your cricket experience. Whether you 
        //   are a player looking for a match or an owner wanting to showcase your turf, TurfX 
        //   is here for you. Thank you for choosing TurfX, and we look forward to serving you!
        // </p>
// //         <h2 className="text-2xl font-semibold mt-6">Meet the Developer</h2>
// //         <p className="text-lg text-gray-700 mb-4">
// //           Hi! I'm Mohammed Kasim, the developer behind TurfX. With a strong background in 
// //           web development, I strive to create intuitive and engaging applications that bring 
// //           people together through sports. My goal with TurfX is to ensure that every user 
// //           has a positive experience, from booking a slot to enjoying the game with friends. 
// //         </p>
// //         <p className="text-lg text-gray-700 mb-4">
// //           Thank you for visiting TurfX, and I hope you enjoy using the platform as much as I 
// //           enjoyed building it!
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// export default AboutUs;

import React from 'react'
import MeetTeam from '../components/Meet_my_Team'
import {motion} from 'framer-motion'
// MeetTeam

function About() {
  return (
    <>
    <div className="bg-[#001242] h-screen pt-1 px-20 flex flex-col items-center mb-14">
      <div className='main-content grid grid-cols-2 mt-48'>
        <div className='image'>
          <motion.img viewport={{once:true}} initial={{x:-70,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:0.6,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} src="https://img.freepik.com/premium-photo/software-developer-image-generated-ai_644690-12981.jpg" alt="" />
        </div>
        <div className="content">
        <motion.p viewport={{once:true}} initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:0.8,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className="text-xl text-gray-400 mb-4">
          Welcome to TurfX, your ultimate destination for booking box cricket slots! 
          As the developer of this website, I have poured my passion for technology 
          and sports into creating a seamless experience for cricket enthusiasts like you. 
          TurfX aims to provide a user-friendly platform that connects players and turf 
          owners, making it easier than ever to enjoy the game.
        </motion.p>
        <motion.p viewport={{once:true}} initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className="text-xl text-gray-400 mb-4">
          At TurfX, we believe in promoting sports and fostering community through 
          friendly matches. Our mission is to provide a reliable platform where players 
          can effortlessly find and book their favorite cricket turfs, while owners can 
          manage their venues with ease.
        </motion.p>
        <motion.p viewport={{once:true}} initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className="text-xl text-gray-400 mb-4">
          Join us on this exciting journey to elevate your cricket experience. Whether you 
          are a player looking for a match or an owner wanting to showcase your turf, TurfX 
          is here for you. Thank you for choosing TurfX, and we look forward to serving you!
        </motion.p>
      </div>
      </div>
      <div className='mt-10'>
        {/* <button className='bg-zinc-500 p-5 rounded-lg '>Contact Us</button> */}
        
        <motion.button viewport={{once:true}} initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-
            2 px-4 rounded p-3">Contact Us</motion.button>
      </div>
    </div>
    <MeetTeam/>
    </>

  )
}

export default About



