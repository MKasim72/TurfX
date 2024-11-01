// import React,{useState,createContext,useEffect} from 'react'

// const AuthContext = createContext()

// function Auth({children}) {
//     const [user, setUser] = useState("");
//     const [token, setToken] = useState(localStorage.getItem("token"));
//     const AuthorizationToken = `Bearer ${token}`
//     // const [loading, setIsLoading] = useState(true);

//     // let isLoggedIn = !!token 
//     let isLoggedIn = !!token


//     const storeTokenInLs = (serverToken) =>{
//         setToken(serverToken)
//         return localStorage.setItem("token",serverToken)
//     }

//     const LogOut = () =>{
//         setToken("");
//         return localStorage.removeItem("token")
//     }

//     const userAuthentication = async() =>{
//       try {
//         // setTimeout(()=>{
//         //   setIsLoading(true)
//         // },5000)
//         // setIsLoading(true)
//         const response = await fetch("http://localhost:3000/api/auth/user",{
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": AuthorizationToken            
//           }
//         })
//         if(response.ok){
//           const data = await response.json()
//           setUser(data.userData)
//           // setTimeout(()=>{
//           //   setIsLoading(false)
//           // },5000)
//         }
//         else{
//           console.log("error fetching data from user panel")
//           // setIsLoading(false)
//         }
//       } catch (error) {
//         console.log(error)
//       }
//     }
//     useEffect(()=>{
//       userAuthentication()

//     },[])


//   return (
//     <div>
//       <AuthContext.Provider value={{isLoggedIn,LogOut,storeTokenInLs,user,userAuthentication}}>
//         {children}
//       </AuthContext.Provider>

//     </div>
//   )
// }

// export {AuthContext}
// export default Auth

import React,{useState,createContext,useEffect} from 'react'

const AuthContext = createContext()

function Auth({children}) {
    const [user, setUser] = useState("");
    const [token, setToken] = useState(localStorage.getItem("token"));
    const AuthorizationToken = `Bearer ${token}`
    // const [loading, setIsLoading] = useState(true);

    // let isLoggedIn = !!token 
    let isLoggedIn = !!token


    const storeTokenInLs = (serverToken) =>{
        setToken(serverToken)
        return localStorage.setItem("token",serverToken)
    }

    const LogOut = () =>{
        setToken("");
        return localStorage.removeItem("token")
    }

    const userAuthentication = async() =>{
      try {
        // setTimeout(()=>{
        //   setIsLoading(true)
        // },5000)
        // setIsLoading(true)
        const response = await fetch("http://localhost:3000/api/auth/user",{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": AuthorizationToken            
          }
        })
        if(response.ok){
          const data = await response.json()
          setUser(data.userData)
          // setTimeout(()=>{
          //   setIsLoading(false)
          // },5000)
        }
        else{
          console.log("error fetching data from user panel")
          // setIsLoading(false)
        }
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(()=>{
      userAuthentication()

    },[])


  return (
    <div>
      <AuthContext.Provider value={{isLoggedIn,LogOut,storeTokenInLs,user,AuthorizationToken,userAuthentication}}>
        {children}
      </AuthContext.Provider>

    </div>
  )
}

export {AuthContext}
export default Auth
