import React from 'react'
import Navbax from "../components/Navbax"
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
        <Navbax/>
        <div>
          <Outlet/>
        </div>
    </div>
  )
}

export default Layout