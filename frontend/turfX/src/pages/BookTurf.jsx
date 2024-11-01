import React,{useState} from 'react'
import Book_Card from '../components/Book_Card'
import {motion} from 'framer-motion'

function BookTurf() {
  const [searchQuery,setSearchQuery] = useState('')
  const handleSearch = (e) =>{
    setSearchQuery(e.target.value)
  }
  return (
    <>
      <div className="relative h-[30rem] mt-[7rem]">
        {/* Background Image */}
      
        <motion.img  viewport={{once:true}} initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}}
          src="https://images.pexels.com/photos/976837/pexels-photo-976837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full h-[30rem] object-cover"
          alt="Turf"
        >
        </motion.img>

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="absolute inset-0 flex justify-center mt-44">
          <motion.h1  viewport={{once:true}} initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className="text-white text-4xl font-bold">" Find and Secure Your Favorite Sports Locations "</motion.h1>
        </div>
      

        {/* Search Bar Overlay */}
        <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 w-4/5 bg-white rounded-lg shadow-lg p-6 z-50">
          <motion.div  viewport={{once:true}} initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className="text-center mb-4">
            <h2 className="text-xl font-semibold text-[#001242]">Search With Location and Turf Name</h2>
          </motion.div>

          <motion.div viewport={{once:true}} initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className="flex justify-center items-center space-x-4">
            {/* Input Field */}
            <motion.input
            viewport={{once:true}} initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:0.5,
              x:{type:"spring",stiffness:60},
              opacity:{duration:0.5},
              ease:"easeIn",
              duration:1}} 
              type="text"
              onChange={handleSearch}
              value={searchQuery}
              placeholder="Enter location"
              id="searchText"
              className="border border-gray-300 rounded-lg py-2 px-4 w-full md:w-3/4 lg:w-1/2 focus:outline-none focus:ring-2 focus:ring-[#001242] focus:border-transparent"
            />
            {/* Search Button */}
            <motion.button viewport={{once:true}} initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}}  onClick={handleSearch} className="bg-[#001242] text-white font-semibold py-2 px-8 rounded-lg hover:bg-[#002366] transition duration-300">
              Search
            </motion.button>
          </motion.div>

          <div className="flex justify-around mt-8 text-center">
            {/* Stats as shown in your example */}
            <motion.div viewport={{once:true}} initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} >
              <h3 className="font-bold text-2xl text-[#001242]">600000+</h3>
              <p className="text-gray-600">Users</p>
            </motion.div>
            <motion.div viewport={{once:true}} initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.4,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} >
              <h3 className="font-bold text-2xl text-[#001242]">1000+</h3>
              <p className="text-gray-600">Venues</p>
            </motion.div>
            <motion.div viewport={{once:true}} initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.8,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} >
              <h3 className="font-bold text-2xl text-[#001242]">160+</h3>
              <p className="text-gray-600">Cities</p>
            </motion.div>
            <motion.div viewport={{once:true}} initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:2.2,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} >
              <h3 className="font-bold text-2xl text-[#001242]">30+</h3>
              <p className="text-gray-600">Sports</p>
            </motion.div>
            <motion.div viewport={{once:true}} initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:2.6,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} >
              <h3 className="font-bold text-2xl text-[#001242]">22</h3>
              <p className="text-gray-600">States</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="bg-white min-h-screen px-16 flex items-center">
        <div className="cards mt-28 my-10">
            <Book_Card searchQuery={searchQuery}/>
        </div>
      </div>
    </>
  )
}

export default BookTurf

// import React, { useState } from 'react';
// import Book_Card from '../components/Book_Card';

// function BookTurf() {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = () => {
//     // This will trigger the Book_Card component to fetch filtered turfs based on search query
//     setSearchQuery(document.getElementById('searchInput').value);
//   };

//   return (
//     <>
//       <div className="relative h-[30rem] mt-[7rem]">
//         <img
//           src="https://images.pexels.com/photos/976837/pexels-photo-976837.jpeg"
//           className="w-full h-[30rem] object-cover"
//           alt="Turf"
//         />
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="absolute inset-0 flex justify-center mt-44">
//           <h1 className="text-white text-4xl font-bold">
//             " Find and Secure Your Favorite Sports Locations "
//           </h1>
//         </div>

//         {/* Search Bar Overlay */}
//         <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 w-4/5 bg-white rounded-lg shadow-lg p-6 z-50">
//           <div className="text-center mb-4">
//             <h2 className="text-xl font-semibold text-[#001242]">Search By Name or Location</h2>
//           </div>

//           <div className="flex justify-center items-center space-x-4">
//             {/* Input Field */}
//             <input
//               id="searchInput"
//               type="text"
//               placeholder="Enter turf name or location"
//               className="border border-gray-300 rounded-lg py-2 px-4 w-full md:w-3/4 lg:w-1/2 focus:outline-none focus:ring-2 focus:ring-[#001242] focus:border-transparent"
//             />
//             {/* Search Button */}
//             <button
//               onClick={handleSearch}
//               className="bg-[#001242] text-white font-semibold py-2 px-8 rounded-lg hover:bg-[#002366] transition duration-300"
//             >
//               Search
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Cards Section */}
//       <div className="bg-white min-h-screen px-16 flex items-center">
//         <div className="cards mt-28 ">
//           <Book_Card searchQuery={searchQuery} />
//         </div>
//       </div>
//     </>
//   );
// }

// export default BookTurf;
