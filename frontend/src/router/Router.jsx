import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Layout from '../layout/Layout';
import Landing from "../pages/Landing"
import Signin from "../pages/Signin"
import Signup from "../pages/Signup"
import Dashboard from "../pages/Dashboard"
import ProtectedRoute from '../authRoute/ProtectedRoute';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Landing/>
      },
      {
        path:"/signin",
        element:<Signin/>
      },
      {
        path:"/signup",
        element:<Signup/>
      }
      ,{
        path :"/dashboard",
        element:<ProtectedRoute><Dashboard/></ProtectedRoute>   
      }

    ]
  }
])

export default router 