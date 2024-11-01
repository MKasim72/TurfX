// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { NavLink } from "react-router-dom";
// // import './turfdetail.css';

// const TurfDetail = () => {
//     const { id } = useParams(); // Get turf ID from URL parameters
//     const [turf, setTurf] = useState(null);
//     const [image,setImage] = useState()

//     const handleImage = (e) =>{
//         const img = e.target.value
//         console.log(img)
//     }

//     useEffect(() => {
//         const fetchTurf = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3000/api/home/turf/${id}`);
//                 console.log(response.data); // Log the response data
//                 setTurf(response.data);
//             } catch (error) {
//                 console.error("Error fetching turf details", error);
//             }
//         };

//         fetchTurf();
//     }, [id]);

//     if (!turf) return <div>Loading...</div>;

//     // Log the turf object to verify its properties
//     console.log("Turf details:", turf);

//     return (
//         <>
//         {/* <div className="text-black bg-[#001242] mx-40 p-5 flex justify-center mt-44 gap-32 rounded-lg"> */}
//             <div className="flex justify-center mt-48 px-20 gap-10">
//             <div>
//                 <img src={turf.images} alt="" className="w-[30rem] rounded-lg"/>
//                 {
//                 <>
//                    <div className="list-images mt-5 flex gap-2">
//                         {
//                             turf.images.map((image, index) => {
//                                 return (
//                                     <div key={index} className="flex">
//                                         <img src={image} alt="" className="w-[8rem] rounded-lg" onClick={handleImage}/>
//                                         </div>
//                                     );
//                             })
//                         }
//                         {/* <img src={turf.images[0]} alt="" className="w-[8rem]"/> */}
//                     </div>
//                 </>
//                 }

//             </div>
//             <div className="flex flex-col mt-5">
//                 <h1 className="text-center text-4xl capitalize mt-5 bg-teal-700 px-20 rounded text-[#001242] font-bold">{turf.turf_name}</h1>
//                 <p className="text-center text-3xl capitalize mt-5  bg-teal-700 px-20 rounded text-[#001242] font-bold" >Location: {turf.location}</p>
//                 <p className="text-center text-3xl capitalize mt-5  bg-teal-700 px-20 rounded text-[#001242] font-bold">Price: ${turf.price}</p>
//                 <p className="text-center text-3xl capitalize mt-5  bg-teal-700 px-20 rounded text-[#001242] font-bold">{turf.description}</p>
//             </div>
//         </div>
//         <div className="flex justify-center mt-8">
//             <button className="bg-[#001242] p-3 rounded-lg text-white hover:bg-[#374d86]">
//                <NavLink to="/bookTurf">Back To Home </NavLink>
//             </button>
//         </div>
//         </>
//     );
// };

// export default TurfDetail;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineSportsCricket } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { IoIosFootball } from "react-icons/io";
import { motion } from "framer-motion";

const TurfDetail = () => {
    const [model,setModel] = useState(true)
    const { id } = useParams(); // Get turf ID from URL parameters
    const [turf, setTurf] = useState(null); // To store fetched turf details
    const [selectedImage, setSelectedImage] = useState(""); // To track selected image

  // Fetch turf details when component mounts or ID changes
  useEffect(() => {
    const fetchTurf = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/home/turf/${id}`
        );
        console.log(response.data); // Log the response data
        setTurf(response.data);

        // Set the first image as the default selected image
        setSelectedImage(response.data.images[0]);
      } catch (error) {
        console.error("Error fetching turf details", error);
      }
    };

    fetchTurf();
  }, [id]);

  if (!turf) return <div>Loading...</div>;

  // Handler for clicking on a thumbnail image
  const handleImageClick = (image) => {
    setSelectedImage(image); // Update the selected image
  };

  return (
    <>
      <div className="flex px-40 mt-36 gap-10">
        <div className="flex flex-col ">
          <motion.div
            viewport={{ once: true }}
            initial={{ x: -70, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="mt-10 my-10"
          >
            <h1 className="text-4xl text-center font-bold">{turf.turf_name}</h1>
          </motion.div>
          {/* Display the selected image */}
          <div>
            <motion.img
              viewport={{ once: true }}
              initial={{ x: -70, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.6,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 2 },
                ease: "easeIn",
                duration: 1,
              }}
              src={selectedImage}
              alt="Selected Turf"
              className="shadow-2xl w-[30rem] rounded-lg border-4 border-blue-900 p-1 h-[20rem]"
            />

            {/* Display the list of thumbnail images */}
            <div className="list-images mt-5 flex gap-2">
              {turf.images.map((image, index) => (
                <div key={index} className="flex">
                  <motion.img
                    viewport={{ once: true }}
                    initial={{ x: -70, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.6,
                      x: { type: "spring", stiffness: 60 },
                      opacity: { duration: 2 },
                      ease: "easeIn",
                      duration: 1,
                    }}
                    src={image}
                    alt="Turf Thumbnail"
                    className={`w-[8rem] rounded-lg cursor-pointer ${
                      selectedImage === image
                        ? "border-2 border-teal-900 border-9 p-0.5"
                        : ""
                    }`}
                    onClick={() => handleImageClick(image)} // Handle image click
                  />
                </div>
              ))}
            </div>
          </div>

          <motion.div
            viewport={{ once: true }}
            initial={{ x: -70, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="bg-[#001242] mt-5 p-3 rounded-lg text-center hover:bg-[#2b3b64] cursor-pointer"
          >
            <button className="text-white font-bold text-xl">
                
                <NavLink to={`/book/${turf._id}`}>Book Now</NavLink>
              
              </button>
          </motion.div>

          <div className="facilities mt-5 border bg-gray-100 shadow-xl p-3">
            <motion.h2
              viewport={{ once: true }}
              initial={{ x: -70, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.6,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="text-xl font-bold text-center text-gray-600"
            >
              Sports Available
            </motion.h2>
            <div className="grid grid-cols-3 mt-3">
              {turf.sports_available.map((sport, index) => (
                
                <motion.div
                viewport={{ once: true }}
                initial={{ x: -70, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.6,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 2 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className=""
              >
                <div className="mt-4">
                  {/* <MdOutlineSportsCricket className="text-7xl" /> */}
                  <h1 className="text-xl text-center font-bold flex items-center gap-2">
                  <FaCircleCheck className="text-green-500" />
                  {sport}</h1>
                </div>
              </motion.div>
            
              ))}
              
              {/* <motion.div
                viewport={{ once: true }}
                initial={{ x: -70, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.6,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 2 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="card w-[8rem] border h-[10rem] bg-white hover:border-[#001242] hover:border-4 border-black items-center flex flex-col justify-center"
                onClick = {()=>setModel(True)}

              >
                <div className="">
                  <IoIosFootball className="text-7xl" />
                  <h1 className="text-xl text-center font-bold">FootBall</h1>
                </div>
              </motion.div> */}
            </div>
          </div>
        </div>

        <motion.div
          viewport={{ once: true }}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 1.6,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 2 },
            ease: "easeIn",
            duration: 1,
          }}
          className="flex flex-col bg-gray-100 p-5 w-[45rem] border-2 shadow-2xl h-[55rem]"
        >
          <motion.div

            viewport={{ once: true }}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 1.8,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="bg-slate-200 p-5 hover:shadow-xl"
          >
            <motion.h1
              viewport={{ once: true }}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 2.0,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="flex flex-col"
            >
              <span className="font-bold text-xl">Timing : </span>
              <span className="mt-1 ml-1 font-semibold text-lg">
                {turf.timing} 
              </span>
            </motion.h1>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 2.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="bg-slate-200 p-5 mt-3 hover:shadow-xl"
          >
            <motion.h1
              viewport={{ once: true }}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 2.4,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="flex flex-col"
            >
              <span className="font-bold text-xl">Location : </span>
              <span className="mt-1 ml-1 font-semibold text-lg">
                {turf.location}
              </span>
              <span>
                <iframe
                  className="mt-2"
                  src={turf.iframe_map}
                  width="650"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </span>
            </motion.h1>
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 2.6,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 2 },
              ease: "easeIn",
              duration: 1,
            }}
            className="description "
          >
            <motion.div
              viewport={{ once: true }}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 2.8,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="turf-desc bg-slate-200 p-2 mt-3 w-[42.5rem] h-[10rem] text-center hover:shadow-xl"
            >
              <motion.h1
                viewport={{ once: true }}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 3.0,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 2 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="text-lg text-gray-500 font-semibold"
              >
                More About {turf.turf_name}
              </motion.h1>
              <motion.p
                viewport={{ once: true }}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 3.2,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 2 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="text-md text-gray-800 font-medium"
              >
                {turf.detailed_description}
              </motion.p>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ x: -70, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 3.4,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 2 },
                ease: "easeIn",
                duration: 1,
              }}
              className="amenities bg-slate-200 p-2 mt-3 w-[42.5rem] h-[6rem] hover:shadow-xl"
            >
              <motion.h1
                viewport={{ once: true }}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 3.6,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 2 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="text-md text-gray-500 font-semibold text-center"
              >
                Amenities Provides by Us {turf.turf_name}
              </motion.h1>
              <div className="amenities-list mt-3">
                <ul className="flex gap-5 ml-2">
                  {
                    turf.amenities.map((amenity, index) => (
                    <motion.li
                      viewport={{ once: true }}
                      initial={{ x: 100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 3.6,
                        x: { type: "spring", stiffness: 60 },
                        opacity: { duration: 2 },
                        ease: "easeIn",
                        duration: 1,
                    }}
                    className="flex items-center text-md text-gray-800 font-medium gap-2"
                  >
                    <FaCircleCheck className="text-green-500" />
                    <span>{amenity}</span>
                  </motion.li>
                    ))
                  }
                  
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* <h1 className="text-center text-4xl capitalize mt-5 bg-teal-700 px-20 rounded text-[#001242] font-bold">
                        {turf.turf_name}
                    </h1>
                    <p className="text-center text-3xl capitalize mt-5 bg-teal-700 px-20 rounded text-[#001242] font-bold">
                        Location: {turf.location}
                    </p>
                    <p className="text-center text-3xl capitalize mt-5 bg-teal-700 px-20 rounded text-[#001242] font-bold">
                        Price: ${turf.price}
                    </p>
                    <p className="text-center text-3xl capitalize mt-5 bg-teal-700 px-20 rounded text-[#001242] font-bold">
                        {turf.description}
                    </p> */}
        </motion.div>
      </div>

      <div className="flex justify-center mt-8 my-5">
        <motion.button
          viewport={{ once: true }}
          initial={{ x: -70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.6,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 2 },
            ease: "easeIn",
            duration: 1,
          }}
          className="bg-[#001242] p-3 rounded-lg text-white hover:bg-[#374d86]"
        >
          <NavLink to="/bookTurf">Back To Home</NavLink>
        </motion.button>
      </div>
    </>
  );
};

export default TurfDetail;
