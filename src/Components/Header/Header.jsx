import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CiMenuBurger } from "react-icons/ci";
import { IoIosSchool } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react';

function Header() {
  const [sidebar,setSidebar]=useState(false)
  return (
    <>
    
    <div className='overall-header-section'>
      <div className="left-header-section">
        <h1 className='logo-name text-primary '><span><IoIosSchool className=' grad-icon'/></span><span className='mutc-name'>MUTC</span></h1>
      </div>
      <div className="center-header-section">
      <ul className='list-unstyled nav-links-ul'>
        <li><Link to='/' className='link-item'>Home</Link></li>
        <li><Link to='/leadership' className='link-item'>Leadership</Link></li>
        <li><Link to='/tracks' className='link-item'>Tracks</Link></li>
        <li><Link to='/events' className='link-item'>Events</Link></li>
      </ul>
      </div>
      <div className="menu-icon" onClick={()=>{setSidebar(!sidebar)}}>
      <CiMenuBurger className='menu-icon-item'/>
      </div>
      <div className="right-header-section">
      <div className="btn-container-overall">
        <button className='btn signup-btn btn-primary fs-3'>Signup</button>
      </div>
      
      </div>
      </div>
      {sidebar && <div className="sidebar-container-header">
      <Sidebar/>
      <div className="cross-icon" onClick={()=>{setSidebar(!sidebar)}}>
       <RxCross2 className='fs-1'/>
      </div>
      </div>
      }
      </>
  )
}

export default Header