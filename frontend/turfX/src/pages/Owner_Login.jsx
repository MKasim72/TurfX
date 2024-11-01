import React,{useContext,useState} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import Owner,{OwnerContext} from '../store/owner';
import {toast} from 'react-toastify'
import axios from 'axios';

function OwnerLogin() {
    const {OwnerStoreTokenInLs} = useContext(OwnerContext)


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
  


const handleForm = async (e) => {
  e.preventDefault();
  console.log(user.email);

  try {
    const response = await axios.post('http://localhost:3000/api/owner/login', user, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(response);
    
    if (response.status === 202) {
      // Assuming the token is returned in the response
      const res_data = response.data; 
      OwnerStoreTokenInLs(res_data.token); // Ensure this function is defined
      
      setUser({
        email: '',
        password: '',
      });

      toast.success('Login Successful');
      navigate('/dashboard'); // Navigate to home or another route after login
    } else {
      toast.error(response.data.message); // Handle error message
    }   
  } catch (error) {
    // Handle error here, including server validation errors
    if (error.response) {
      // Request made and server responded
      toast.error(error.response.data.message || 'An error occurred');
    } else if (error.request) {
      // The request was made but no response was received
      toast.error('No response from server');
    } else {
      // Something happened in setting up the request
      toast.error('Error: ' + error.message);
    }
    console.error('Error:', error);
  }
};
  return (
    <div>
          <div className='h-screen bg-white px-20 flex justify-center'>
        <div className='bg-white border mt-44 border-blue-900 h-[35rem] w-[70rem] rounded-xl shadow-2xl'>
            <div className="grid grid-cols-2">
                <div>
                    <form action="" onSubmit={handleForm}>
                        {/* <label htmlFor="">Email</label> */}
                        <div className='flex flex-col items-center mt-[5rem]'>
                            <h1>As Owner</h1>
                            <h1 className='text-center text-[#001242ea] font-bold text-4xl'>Log In</h1>
                            <div> <input  className='ring-1 ring-gray-300 w-full rounded-md px-[8rem] text-center py-2 mt-5 outline-none
                                focus:ring-2 focus:ring-teal-300 bg-gray-200'placeholder="Email Address" type="email" name="email"
                                value={user.email} onChange={handleChange}
                                />
                            </div>
                            <div>
                            <input  className='ring-1 ring-gray-300 w-full rounded-md px-[8rem] text-center py-2 mt-5 outline-none
                                focus:ring-2 focus:ring-teal-300 bg-gray-200 'placeholder="Password" type="password" name="password"
                                value={user.password} onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='text-center mt-9'>
                            <h2 className='text-gray-500 text-md font-semibold cursor-pointer'>Forger Your Password ? </h2>

                    
                            <h2 className='text-gray-500 text-md font-semibold cursor-pointer mt-5'><span className='
                            text-[#001242ea] font-bold underline'>
                            <a href="/user_login">Login as User</a>
                            </span></h2>

                            <h2 className='text-gray-500 text-md font-semibold cursor-pointer mt-5'>Already Have an account ? <span className='
                            text-[#001242ea] font-bold underline'>
                            <a href="/owner_signUp">Register Now !</a>
                            </span></h2>
                            <button className='bg-[#001242ea] hover:bg-teal-400 text-white font-bold
                            py-2 px-4 rounded-md mt-5'>Log In</button>
                        </div>   
                    </form>
                </div>
                <div className='bg-[#001242ea] h-[34.9rem] rounded-lg rounded-l-full p-[5rem]'>
                    <div className='flex flex-col items-center mt-[5rem]'>
                        <h1 className='text-4xl text-white font-bold leading-normal'> Missed Some Bookings?  <br />Log In to Keep Track and Stay Organized!</h1>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
    </div>
  )
}

export default OwnerLogin
