// import axios from 'axios';
// import React, { useContext, useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { OwnerContext } from '../store/owner';
// import { MdSportsCricket, MdUpdate } from "react-icons/md";
// import { IoIosFootball } from "react-icons/io";
// import { FaSpaceShuttle } from "react-icons/fa";
// import { FaRupeeSign } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import { toast } from 'react-toastify';
// // import axios from 'axios';
// // import { NavLink } from 'react-router-dom';
// // OwnerContext

// function Dashboard() {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const { user } = useContext(OwnerContext);
//   const [turfs , setTurf] = useState([])
//   // const {user} = useContext(OwnerContext)
//   console.log(user.username)
//   // Function to toggle sidebar
//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

  

//   useEffect(() => {
//     const fetchTurfs = async () => {
//       try {
//         // const response = await axios.get('http://localhost:3000/api/dashboard/list_turfs');
//         const token = localStorage.getItem('owner_token'); // Or wherever you store the token
//         const response = await axios.get('http://localhost:3000/api/dashboard/list_turfs', {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         setTurf(response.data);
//         console.log("Response from Dash",response)
//       } catch (err) {
//         // setError(err.message);
//         console.log(err.message)
//       } 
//     };

//     fetchTurfs();
//   }, []);

//   const handleDelete = async(id) =>{
//     try {
//       const token = localStorage.getItem('owner_token'); // Or wherever you store the token
//       const response = await axios.delete(`http://localhost:3000/api/dashboard/deleteTurf/${id}`,{
//         headers: {
//           Authorization : `Bearer ${token}`
//         }
//       })
//       console.log(response.data)
//       if(response.status == 200){
//         fetchTurfs()
//         toast.success("Turf Deleted Successfully")

//       }
//       else{
//         toast.error("Failed to Delete Turf")
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   return (
//     <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
//       {/* Mobile Navbar with Hamburger Menu */}
//       <div className="lg:hidden bg-[#001242] p-5 flex justify-between items-center">
//         <h2 className="text-2xl text-teal-400 font-bold">TurfX Dashboard</h2>
//         <button
//           className="text-white focus:outline-none"
//           onClick={toggleSidebar}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//       </div>

      

//       {/* Main Content Area */}
//       <main className="flex-1 lg:ml-[20%] p-8 z-20">
//         {/* Top Bar */}
//         <header className="flex flex-col lg:flex-row justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-800">`Dashboard Overview {user.username}`</h1>
//           <div className="mt-4 lg:mt-0">
//             <button className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-teal-400">
//                 <NavLink to='/owner_logout'>LogOut `${user.email}`</NavLink>
//             </button>
//           </div>
//         </header>

//         {/* Statistics Section */}
//         <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
//           {/* Stat Card */}
//           <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
//             <h3 className="text-lg font-semibold text-gray-700">Total Turfs</h3>
//             <p className="text-3xl font-bold text-teal-500">{turfs.length}</p>
//           </div>

//           <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
//             <h3 className="text-lg font-semibold text-gray-700">Total Bookings</h3>
//             <p className="text-3xl font-bold text-teal-500">156</p>
//           </div>

//         </section>
//         <div>
//           <h1 className="text-2xl mt-10 font-bold text-gray-800">All Listed Turf</h1>
//         </div>
//         <div className="grid grid-cols-3 gap-10 mt-10">  
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
//                   <button className="bg-red-500 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded-md mt-5" 
//                   onClick={()=>handleDelete(turf._id)}>
//                   <MdDelete/>
//                   </button>
//                   <button className="bg-green-500 hover:bg-teal-400 text-white ml-2 font-bold py-2 px-4 rounded-md mt-5">
//                   <MdUpdate/>
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
//       </main>
//     </div>
//   );
// }

// export default Dashboard;
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { OwnerContext } from '../store/owner';
import { MdSportsCricket, MdUpdate, MdDelete } from "react-icons/md";
import { IoIosFootball } from "react-icons/io";
import { FaSpaceShuttle, FaRupeeSign } from "react-icons/fa";
import { toast } from 'react-toastify';

function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useContext(OwnerContext);
  const [turfs, setTurf] = useState([]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Move fetchTurfs outside useEffect
  const fetchTurfs = async () => {
    try {
      const token = localStorage.getItem('owner_token');
      const response = await axios.get('http://localhost:3000/api/dashboard/list_turfs', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setTurf(response.data);
      console.log("Response from Dash", response);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchTurfs();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('owner_token');
      const response = await axios.delete(`http://localhost:3000/api/dashboard/deleteTurf/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);

      if (response.status === 200) {
        toast.success("Turf Deleted Successfully");
        fetchTurfs(); // Re-fetch turfs after deletion
      } else {
        toast.error("Failed to Delete Turf");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in Deleting the Turf");
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
      {/* Mobile Navbar with Hamburger Menu */}
      <div className="lg:hidden bg-[#001242] p-5 flex justify-between items-center">
        <h2 className="text-2xl text-teal-400 font-bold">TurfX Dashboard</h2>
        <button
          className="text-white focus:outline-none"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-[20%] p-8 z-20">
        {/* Top Bar */}
        <header className="flex flex-col lg:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            `Dashboard Overview {user.username}`
          </h1>
          <div className="mt-4 lg:mt-0">
            <button className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-teal-400">
              <NavLink to='/owner_logout'>LogOut `${user.email}`</NavLink>
            </button>
          </div>
        </header>

        {/* Statistics Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <h3 className="text-lg font-semibold text-gray-700">Total Turfs</h3>
            <p className="text-3xl font-bold text-teal-500">{turfs.length}</p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <h3 className="text-lg font-semibold text-gray-700">Total Bookings</h3>
            <p className="text-3xl font-bold text-teal-500">156</p>
          </div>
        </section>

        <div>
          <h1 className="text-2xl mt-10 font-bold text-gray-800">All Listed Turf</h1>
        </div>

        <div className="grid grid-cols-3 gap-10 mt-10">
          {Array.isArray(turfs) && turfs.length > 0 ? (
            turfs.map(turf => (
              <div key={turf.id} className="card bg-white flex flex-col rounded-lg border border-gray-500 relative">
                <div className="image relative">
                  <img src={turf.images} alt="image" className="rounded-t-lg w-full h-[19rem] object-cover" />
                  <h2 className="absolute top-3 right-3 bg-[#001242ea] text-white px-3 py-1 rounded-md">
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
                    <button
                      className="bg-red-500 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded-md mt-5"
                      onClick={() => handleDelete(turf._id)}
                    >
                      <MdDelete />
                    </button>
                    <button className="bg-green-500 hover:bg-teal-400 text-white ml-2  py-2 px-4 rounded-md mt-5">
                      <NavLink to={`/dashboard/update/${turf._id}`}>
                        <MdUpdate></MdUpdate>
                      </NavLink>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No turfs available.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;

