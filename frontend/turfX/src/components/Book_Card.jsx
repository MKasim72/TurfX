// import React, { useState, useEffect } from 'react';
// import { MdSportsCricket } from "react-icons/md";
// import { IoIosFootball } from "react-icons/io";
// import { FaSpaceShuttle } from "react-icons/fa";
// import { FaRupeeSign } from "react-icons/fa";
// import axios from 'axios';
// import { NavLink } from 'react-router-dom';

// function Book_Card() {
//   const [turfs, setTurf] = useState([]);

//   useEffect(() => {
//     const fetchTurfs = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/api/home/list_all');
//         setTurf(response.data);
//       } catch (err) {
//         console.log(err.message);
//       }
//     };

//     fetchTurfs();
//   }, []);

//   return (
//     <div className="grid grid-cols-3 gap-10">  
//       {
//         Array.isArray(turfs) && turfs.length > 0 ? (
//           turfs.map(turf => (
//             <div key={turf.id} className="card bg-white flex flex-col rounded-lg border border-gray-500 relative">
//               <div className="image relative">
//                 <img src={turf.images} alt="image" className="rounded-t-lg w-full h-[19rem] object-cover" />
//                 <h2 className="absolute top-3 right-3 bg-[#001242ea] text-white px-3 py-1 rounded-md ">
//                   {turf.type}
//                 </h2>
//               </div>
//               <div className="content mt-3 flex justify-between mx-5 items-center py-3">
//                 <div>
//                   <h1 className="text-xl font-bold">{turf.turf_name}</h1>
//                   <h1 className="text-gray-800 text-md">{turf.location}</h1>
//                   <div className="facilities mt-5 flex gap-2">
//                     <MdSportsCricket className="text-2xl" />
//                     <FaSpaceShuttle className="text-2xl" />
//                     <IoIosFootball className="text-2xl" />
//                   </div>
//                 </div>
//                 <div>
//                   <h1 className="text-2xl font-bold">
//                     <span className="flex items-center">
//                       <FaRupeeSign />
//                       {turf.price}
//                     </span>
//                   </h1>
//                   <button className="bg-[#001242ea] hover:bg-teal-400 text-white font-bold py-2 px-4 rounded-md mt-5">
//                     <NavLink to={`/turf/${turf._id}`}>Book Now</NavLink>
//                   </button>
//                 </div>
//               </div>
//             </div>    
//           ))
//         ) : (
//           <p>No turfs available.</p>
//         )
//       }
//     </div>
//   );
// }

// export default Book_Card;
import React, { useState, useEffect, useContext } from 'react';
import { MdSportsCricket } from "react-icons/md";
import { IoIosFootball } from "react-icons/io";
import { FaSpaceShuttle } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import {motion} from 'framer-motion'
import { toast } from 'react-toastify';
import { AuthContext } from '../store/auth';

function Book_Card({ searchQuery }) {
  const [turfs, setTurf] = useState([]);

  useEffect(() => {
    const fetchTurfs = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/home/list_all?search=${searchQuery}`);
        setTurf(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchTurfs();
  }, [searchQuery]); // Re-run useEffect when searchQuery changes

  const {isLoggedIn} = useContext(AuthContext)

  return (
    <div className="grid grid-cols-3 gap-10">  
      {
        Array.isArray(turfs) && turfs.length > 0 ? (
          turfs.map(turf => (
            <motion.div viewport={{once:true}} initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.8,
              x:{type:"spring",stiffness:60},
              opacity:{duration:2},
              ease:"easeInOut",
              duration:1}} key={turf.id} className="card bg-white flex flex-col rounded-lg border border-gray-500 relative">
              <div className="image relative">
                <img src={turf.images} alt="image" className="rounded-t-lg w-full h-[19rem] object-cover" />
                <h2 className="absolute top-3 right-3 bg-[#001242ea] text-white px-3 py-1 rounded-md ">
                  {turf.type}
                </h2>
              </div>
              <div className="content mt-3 flex justify-between mx-5 items-center py-3">
                <div>
                  <h1 className="text-xl font-bold">{turf.turf_name}</h1>
                  <h1 className="text-gray-800 text-md">{turf.location}</h1>
                  <div className="facilities mt-5 flex gap-2">
                    <MdSportsCricket className="text-2xl" />
                    <FaSpaceShuttle className="text-2xl" />
                    <IoIosFootball className="text-2xl" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">
                    <span className="flex items-center">
                      <FaRupeeSign />
                      {turf.price}
                    </span>
                  </h1>
                    {
                      isLoggedIn ? (
                        <button className="bg-[#001242ea] hover:bg-teal-400 text-white font-bold py-2 px-4 rounded-md mt-5">
                          <NavLink to={`/turf/${turf._id}`}>Book Now</NavLink>
                        </button>
                      ) :
                      (
                        <button className="bg-[#001242ea] hover:bg-teal-400 text-white font-bold py-2 px-4 rounded-md mt-5"
                        onClick={()=>toast.error("You need to login first !")}>
                          Book Now
                        </button>
                      )
                    }
                </div>
              </div>
            </motion.div>    
          ))
        ) : (
          <p>No turfs available.</p>
        )
      }
    </div>
  );
}

export default Book_Card;
