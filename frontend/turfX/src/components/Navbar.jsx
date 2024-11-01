import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {AuthContext} from '../store/auth'
import {motion} from 'framer-motion'
  
function Navbar() {
  // const {isLoggedIn} = useContext(AuthContext)
  const {isLoggedIn} = useContext(AuthContext)
  const myNav = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ]
  return (
    <div className='w-full px-20 py-8 z-60 fixed flex justify-between items-center bg-[#001242] '>
      <div viewport={{once:true}} initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className="logo">
         <h1 className='text-teal-400 text-4xl font-bold'>TurfX.</h1> {/*text-[#005E7C] */}
      </div>
      <div className="navbar">
        <ul className="flex gap-9 text-white items-center">
            {myNav.map((item,index)=>(
                <>
                <motion.div className='flex flex-col border-b-4 border-transparent p-2 hover:border-white transition-all duration-300 ease-in-out'>
                <NavLink to={item.link} key={item.id} className="text-white hover:text-white transition
                duration-300 ease-in-out">{item.name}</NavLink>
                </motion.div>
                </>
            ))}

            {
              isLoggedIn ?   
              <>
              <li>
                <NavLink to='track_my_bookings' className=' p-3 border hover:bg-white hover:text-black hover:font-bold hover:scale-105 hover:cursor-pointer'>My Bookings</NavLink>
              </li>
                <li className=' p-3 border hover:bg-white hover:text-black hover:font-bold hover:scale-105 hover:cursor-pointer'>
                <NavLink to='/user_logout'>LogOut</NavLink>
              </li>
              
              </>
               :
            <>

              <li className=' p-3 border hover:bg-white hover:text-black hover:font-bold hover:scale-105 hover:cursor-pointer'>
              <NavLink to='/user_signUp'>Sign Up</NavLink>
              </li>
              <li className=' p-3 border hover:bg-white hover:text-black hover:font-bold hover:scale-105 hover:cursor-pointer'>
              <NavLink to='/user_login'>Login</NavLink>
              </li>
              

            </>
            }
            <li className=' p-3 border hover:bg-white hover:text-black hover:font-bold hover:scale-105 hover:cursor-pointer'>
              <NavLink to='/bookTurf'>Book Your Turf</NavLink>
            </li>
            {/* <li className=' p-3 border hover:bg-white hover:text-black hover:font-bold hover:scale-105 hover:cursor-pointer '>SignUp</li>
            <li className=' p-3 border hover:bg-white hover:text-black hover:font-bold hover:scale-105 hover:cursor-pointer'>Login</li> bg-[#001242] */}
        </ul>
      </div>
    </div>
  )
}

export default Navbar

// import React from 'react';

// function Navbar() {
//   return (
//     <div className='w-full px-20 py-8 fixed flex justify-between items-center'>
//       <div className="logo">
//         <h1 className='text-[#005E7C] text-4xl font-bold'>TurfX.</h1>
//       </div>
//       <div className="navbar">
//         <ul className="flex gap-9 text-white items-center">
//           {['Home', 'About Us', 'Contact Us'].map((item, index) => (
//             <div
//               key={index}
//               className='flex flex-col border-transparent p-2 hover:border hover:border-white transition-all duration-300 ease-in-out cursor-pointer'
//             >
//               <li>{item}</li>
//             </div>
//           ))}
//           <li className='p-3 border hover:bg-white hover:text-black hover:font-bold hover:scale-105 hover:cursor-pointer'>Book Your Turf</li>
//           <li className='p-3 border hover:bg-white hover:text-black hover:font-bold hover:scale-105 hover:cursor-pointer'>SignUp</li>
//           <li className='p-3 border hover:bg-white hover:text-black hover:font-bold hover:scale-105 hover:cursor-pointer'>Login</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Navbar;


// import React from 'react'

// function Navbar() {
//   return (
//     <div className='w-full px-20 py-8 fixed flex justify-between items-center'>
//       <div className="logo">
//         <h1 className='text-[#005E7C] text-4xl font-bold'>TurfX.</h1>
//       </div>
//       <div className="navbar">
//         <ul className="flex gap-9 text-white items-center">
//           {['Home','About Us','Contact Us'].map((item, index) => (
//             <div key={index} className='flex flex-col items-center group'>
//               <li className='border-b-[2px] border-transparent group-hover:border-white w-[40%] group-hover:w-full transition-all duration-300 ease-in-out'>
//                 {item}
//               </li>
//             </div>
//           ))}
//           <li className=' p-3 border hover:bg-white hover:text-black hover:font-bold hover:scale-105 hover:cursor-pointer'>Book Your Turf</li>
//           <li className=' p-3 border hover:bg-white hover:text-black hover:font-bold hover:scale-105 hover:cursor-pointer'>SignUp</li>
//           <li className=' p-3 border hover:bg-white hover:text-black hover:font-bold hover:scale-105 hover:cursor-pointer'>Login</li>
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Navbar
