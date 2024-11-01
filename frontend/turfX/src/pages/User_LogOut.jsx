import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../store/auth'
import { Navigate } from 'react-router-dom'

function UserLogOut() {
  const {LogOut} = useContext(AuthContext)
  useEffect(()=>{
    LogOut()
  },[LogOut])
  return (
    <Navigate to='/user_login'></Navigate>
  )
}

export default UserLogOut
