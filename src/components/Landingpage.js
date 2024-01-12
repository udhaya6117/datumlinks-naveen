import React from 'react'
import Landingpageheader from './Landingpageheader'
import { Outlet } from 'react-router-dom'
import "../components/Landingpage.css"

const Landingpage = () => {
  return (
    <div>
        <div>
            <Landingpageheader />
        </div>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default Landingpage