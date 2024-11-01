import React,{useContext,useState} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import auth, { AuthContext } from '../store/auth'
import {toast} from 'react-toastify'
import axios from 'axios';
import {motion} from 'framer-motion'
// import { toast } from 'react-toastify';

function UserLogin() {
    const {storeTokenInLs} = useContext(AuthContext)

    const navigate = useNavigate()
    const [user,setUser] = useState({
      email : '',
      password : ''
    })
  
    const handleChange = (e) =>{
      const name = e.target.name
      const value = e.target.value
      setUser({
        ...user,
        [name] : value
      })
    }
  


// const handleForm = async (e) => {
//   e.preventDefault();
//   console.log(user.email);

//   try {
//     const response = await axios.post('http://localhost:3000/api/auth/login', user, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     console.log(response);
    
//     if (response.status === 202) {
//       // Assuming the token is returned in the response
//       const res_data = response.data; 
//       storeTokenInLs(res_data.token); // Ensure this function is defined
      
//       setUser({
//         email: '',
//         password: '',
//       });

//       toast.success('Login Successful');
//       navigate('/'); // Navigate to home or another route after login
//     }
//      else {
//       toast.error(response.data.message); // Handle error message
//     }   
//   } catch (error) {
//     // Handle error here, including server validation errors
//     if (error.response) {
//       // Request made and server responded
//       toast.error(error.response.data.message || 'An error occurred');
//     } else if (error.request) {
//       // The request was made but no response was received
//       toast.error('No response from server');
//     } else {
//       // Something happened in setting up the request
//       toast.error('Error: ' + error.message);
//     }
//     console.error('Error:', error);
//   }
// };
const handleForm = async(e) =>{
  e.preventDefault()
  console.log(user.email)
  
  // alert(user.email)
  try {

    const response = await fetch(`http://localhost:3000/api/auth/login`,{
      method : "POST",
      headers:{
        "Content-Type" : "application/json",
      },
      body : JSON.stringify(user)
    })  
    console.log(response)
    const res_data = await response.json()
    if(response.ok){
      storeTokenInLs(res_data.token)
      setUser({
        email : '',
        password : ''
      })
      toast.success(`Login Successful`)
      navigate('/')
    }
    else{
      toast.error(res_data.message)
    }
  } catch (error) {
    console.log(error)
  }
  
}
  
  return (
    <div className='h-screen bg-white px-20 flex justify-center'>
        <motion.div  viewport={{once:true}} initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className='bg-white border mt-44 border-blue-900 h-[35rem] w-[70rem] rounded-xl shadow-2xl'>
            <div className="grid grid-cols-2">
                <div>
                    <form onSubmit={handleForm}>
                        {/* <label htmlFor="">Email</label> */}
                        <div className='flex flex-col items-center mt-[5rem]'>
                            <motion.h1  viewport={{once:true}} initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}}>As User</motion.h1>
                            <motion.h1  viewport={{once:true}} initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className='text-center text-[#001242ea] font-bold text-4xl'>Log In</motion.h1>
                            <motion.div  viewport={{once:true}} initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}}> <input  className='ring-1 ring-gray-300 w-full rounded-md px-[8rem] text-center py-2 mt-5 outline-none
                                focus:ring-2 focus:ring-teal-300 bg-gray-200'placeholder="Email Address" type="email" name="email" 
                                value={user.email} onChange={handleChange}/>
                            </motion.div>
                            <motion.div  viewport={{once:true}} initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}}>
                            <input  className='ring-1 ring-gray-300 w-full rounded-md px-[8rem] text-center py-2 mt-5 outline-none
                                focus:ring-2 focus:ring-teal-300 bg-gray-200 'placeholder="Password" type="password" name="password"
                                value={user.password} onChange={handleChange}/>
                            </motion.div>
                        </div>
                        <motion.div  viewport={{once:true}} initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className='text-center mt-9'>
                            <motion.h2  viewport={{once:true}} initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className='text-gray-500 text-md font-semibold cursor-pointer'>Forger Your Password ? </motion.h2>
            

                            <motion.h2  viewport={{once:true}} initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className='text-gray-500 text-md font-semibold cursor-pointer mt-5'><span className='
                            text-[#001242ea] font-bold underline'>
                            <a href="/owner_login">Login as Owner</a>
                            </span></motion.h2>

                            <motion.h2  viewport={{once:true}} initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className='text-gray-500 text-md font-semibold cursor-pointer mt-5'>Already Have an account ? <span className='
                            text-[#001242ea] font-bold underline'>
                            <motion.a   viewport={{once:true}} initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} href="/user_signUp">Register Now !</motion.a>
                            </span></motion.h2>
                            <button className='bg-[#001242ea] hover:bg-teal-400 text-white font-bold
                            py-2 px-4 rounded-md mt-5'>Log In</button>
                        </motion.div>   
                    </form>
                </div>
                <motion.div  viewport={{once:true}} initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}}  transition={{delay:1.0,
            x:{type:"spring",stiffness:60},
            opacity:{duration:2},
            ease:"easeIn",
            duration:1}} className='bg-[#001242ea] h-[34.9rem] rounded-lg rounded-l-full p-[5rem]'>
                    <div className='flex flex-col items-center mt-[7rem]'>
                        <h1 className='text-4xl text-white font-bold leading-normal'>Welcome back , <br /> to TurfX Sign In to Book!</h1>
                    </div>
                </motion.div>
            </div>
        </motion.div>
      
    </div>
  )
}

export default UserLogin


