import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Layout from '../layout/Layout';
import Landing from "../pages/Landing"
import Signin from "../pages/Signin"
import Signup from "../pages/Signup"
import Dashboard from "../pages/Dashboard"

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
        element:<Dashboard/>
      }

    ]
  }
])

export default router 