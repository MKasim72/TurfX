import React,{useState,createContext,useEffect} from 'react'

const OwnerContext = createContext()

function Owner({children}) {
    const [user, setUser] = useState("");
    const [token, setToken] = useState(localStorage.getItem("owner_token"));
    const OwnerToken = `Bearer ${token}`
    // const [loading, setLoading] = useState(true);

    // let isLoggedIn = !!token 
    let isLoggedIn = !!token


    const OwnerStoreTokenInLs = (serverToken) =>{
        setToken(serverToken)
        return localStorage.setItem("owner_token",serverToken)
    }

    const ownerAuthentication = async() =>{
      try {
        
        const tokens = localStorage.getItem("owner_token")

        const response = await fetch("http://localhost:3000/api/owner/owner",{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": OwnerToken            
          }
        })
        console.log(response)
        if(response.ok){
          const data = await response.json()
          setUser(data.ownerData)
          
        }
        else{
          console.log("error fetching data")
          
        }
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(()=>{
      ownerAuthentication()

    },[])


    const OwnerLogOut = () =>{
        setToken("");
        return localStorage.removeItem("owner_token")
    }

    useEffect(()=>{

    })


  return (
    <div>
      <OwnerContext.Provider value={{isLoggedIn,OwnerLogOut,user,OwnerStoreTokenInLs,ownerAuthentication,OwnerToken}}>
        {children}
      </OwnerContext.Provider>

    </div>
  )
}

export {OwnerContext}
export default Owner
