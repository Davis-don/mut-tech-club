import React from 'react'
import './Leadershiphero.css'
import peopleInOffice from  '../../../assets/mapbox-pzFzd1AD8Ow-unsplash.jpg'
function Leadershiphero() {
  return (
    <div className='Overall-leadership-hero-section'>
        <img className='leadership-about-image' alt='image of people in office' src={peopleInOffice}/>
        <div className="leadership-hero-opacity-regulator"> </div>
        <div className="on-image-leadership-text">
            <h2 className='text-light leadership-hero-heading'>Our Leadership</h2>
            <p className='text-light hero-leadership-paragraph'>Our very able and competent leaders</p>
        </div>
        </div>
  )
}

export default Leadershiphero