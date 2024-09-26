import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './hero.css'

import TypingComponent from './Typingwritter'

function Hero() {
  return (
    <div className='overall-hero-section'>
      <div className="typewritter-text">
      <h1 className='text-light typewriter-text' style={{textAlign:'center'}}><TypingComponent/></h1>
      <div className="hero-section-welcome-text">
      <p className='text-light'>Murang'a University Tech Club – Innovate, collaborate, and lead the future of technology.</p>
      </div>
    
      </div>
      
        </div>
  )
}

export default Hero