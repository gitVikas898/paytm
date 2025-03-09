import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const ProtectedRoute = ({children}) => {
    const user = useSelector((state)=>state.user.user)
    const token = user?.token;
  return (token ? children : <Navigate to={"/signin"} replace/>)
}

export default ProtectedRoute