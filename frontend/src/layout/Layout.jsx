import React from 'react'
import Navbax from "../components/Navbax"
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
const Layout = () => {
  return (
    <div>
        <Navbax/>
        <div>
          <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout