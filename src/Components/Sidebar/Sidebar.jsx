import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './sidebar.css'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='overall-sidebar-container'>
        <ul className='list-unstyled sidebar-ul'>
            <li><Link to='/' className='sidebar-link'>Home</Link></li>
            <li><Link to='/leadership' className='sidebar-link'>Leadership</Link></li>
            <li><Link to='/tracks' className='sidebar-link'>Tracks</Link></li>
            <li><Link to='/events' className='sidebar-link'>Events</Link></li>
        </ul>
        
        </div>
  )
}

export default Sidebar