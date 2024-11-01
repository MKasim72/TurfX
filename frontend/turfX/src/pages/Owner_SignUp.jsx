import React,{useContext,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import Owner,{ OwnerContext } from '../store/owner'


function OwnerSignUp() {
    const {OwnerStoreTokenInLs} = useContext(OwnerContext)
      
    const navigate = useNavigate()
    const [user,setUser] = useState({
        username: "",
        email: "",
        password: "",
        phone:""
    })

    const handleChange = (e) =>{
        let name = e.target.name
        let value = e.target.value

        setUser((prevUser) => {
            return {
                ...prevUser,
                [name]:value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user.username);
        
        try {
          const response = await axios.post("http://localhost:3000/api/owner/register", user, {
            headers: {
              "Content-Type": "application/json"
            }
          });
          console.log(response);
      
          if (response.status == 201) {
            const res_data = response.data;
            console.log(res_data);
            OwnerStoreTokenInLs(res_data.token); // Ensure this function is defined/imported
            
            // Clear the form after successful registration
            setUser({
              username: "",
              email: "",
              password: "",
              phone: ""
            });
      
            toast.success("Owner Account created successfully! Redirecting...");
            navigate('/dashboard'); // Redirect after successful registration
          }
        } catch (error) {
          if (error.response && error.response.status === 422) {
            toast.error("Validation error: " + error.response.data.message);
          } else {
            toast.error("An error occurred: " + error.message);
          }
          console.error("Error:", error);
        }
      };
    
  return (
        <div>
            <div className='h-screen bg-white px-20 flex justify-center'>
        <div className='bg-white border mt-44 border-blue-900 h-[35rem] w-[70rem] rounded-xl shadow-2xl'>
            <div className="grid grid-cols-2">
            <div className='bg-[#001242ea] h-[34.9rem] rounded-lg rounded-r-full p-[5rem]'>
                    <div className='flex flex-col items-center mt-[6rem]'>
                        <h1 className='text-4xl text-white font-bold leading-normal'>Own a Turf? <br />  Let Us Help You Reach More Players Register Your Turf Now!</h1>
                    </div>
                    
                </div>
                <div>
                    <form action="" onSubmit={handleSubmit}>
                        <div className='flex flex-col items-center mt-[2rem]'>
                            <h1>As Owner</h1>
                            <h1 className='text-center text-[#001242ea] font-bold text-4xl'>Create New Account</h1>
                            <div> 
                                <input  className='ring-1 ring-gray-300 w-full rounded-md px-[8rem] text-center py-2 mt-5 outline-none
                                focus:ring-2 focus:ring-teal-300 bg-gray-200'placeholder="Username" type="text" name="username"
                                onChange={handleChange} value={user.username}
                                />
                            </div>
                            <div> 
                                <input  className='ring-1 ring-gray-300 w-full rounded-md px-[8rem] text-center py-2 mt-5 outline-none
                                focus:ring-2 focus:ring-teal-300 bg-gray-200'placeholder="Email Address" type="email" name="email"
                                onChange={handleChange} value={user.email}
                                />
                            </div>
                        
                            <div>
                            <input  className='ring-1 ring-gray-300 w-full rounded-md px-[8rem] text-center py-2 mt-5 outline-none
                                focus:ring-2 focus:ring-teal-300 bg-gray-200 'placeholder="Password" type="password" name="password"
                                onChange={handleChange} value={user.password}
                                />
                            </div>

                            <div>
                            <input  className='ring-1 ring-gray-300 w-full rounded-md px-[8rem] text-center py-2 mt-5 outline-none
                                focus:ring-2 focus:ring-teal-300 bg-gray-200 'placeholder="Phone Number" type="number" name="phone"
                                onChange={handleChange} value={user.phone}
                                />
                            </div>

                        </div>
                        <div className='text-center mt-9'>
                            <h2 className='text-gray-500 text-md font-semibold cursor-pointer py-5'>Already Have an account ? <span className='
                            text-[#001242ea] font-bold underline'>
                                <a href="/owner_login">Login</a>
                            </span>
                            </h2>
                            <h2 className='text-gray-500 text-md font-semibold cursor-pointer'><span className='
                            text-[#001242ea] font-bold underline'>
                            <a href="/user_signUp">Register as User</a>
                            </span></h2>
                            <button className='bg-[#001242ea] hover:bg-teal-400 text-white font-bold
                            py-2 px-4 rounded-md mt-5'>Create Account</button>
                        </div>   
                    </form>
                </div>
            
            </div>
        </div>
    
    </div>
    </div>
  )
}

export default OwnerSignUp
