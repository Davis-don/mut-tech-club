import React from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='overall-header-container'>
        <div className="left-nav-link-ovearall">
      <div className="club-logo">
       <div className="brand-name">
       <h3>MurangaTechClub</h3>
       </div>
      </div>
      <div className="navigation-links-container">
      <ul className='list-unstyled nav-links-ul'>
       <li className='text-light'>Home</li>
       <li className='text-light'>Leadership</li>
       <li className='text-light'>Tracks</li>
       <li className='text-light'>Events</li>
      </ul>
      </div>
        </div>
        <div className="right-nav-link-section-overall">
         {/* <div className="signin-btn">
           <button className='btn btn-lg text-light fs-4'>Signin</button>
         </div> */}
         <div className="signup-btn">
         <button className='btn  btn-lg text-light'>Signup/signin</button>
         </div>

        </div>
        </div>
  )
}

export default Header