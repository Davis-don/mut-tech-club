import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";

function Header() {
  return (
    <div className='ovearall-header-section'>
      <div className="brand-name-section">
        <h1>Murang'a University Tech Club</h1>
      </div>
      <div className="nav-links-section">
        <ul className='list-unstyled'>
        <li><Link to='/' className='nav-link-item'> Home</Link></li>
          <li><Link to='/leadership' className='nav-link-item'> Leadership</Link></li>
          <li><Link to='tracks' className='nav-link-item'> Tracks</Link></li>
          <li><Link to='events' className='nav-link-item'> Events</Link></li>
          <li>
            <div  className='signbtn'>Signup/in</div>
          </li>
        </ul>
      </div>
      <div className="small-screen-menu-icon">
      <CiMenuBurger  className="text-light fs-1"/>
      </div>
      </div>
  )
}

export default Header