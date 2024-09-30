import React from 'react'
import './Trackshero.css'
import trackshero from '../../../assets/trackshero.jpg'

function Trackshero() {
  return (
    <div className='ovearll-tracks-hero'>
    <div className="hero-tracks-image">
        <img className='tracks-hero-img' src={trackshero} alt='image of lecturer lecturing'/>
        <div className="hero-text-in-image-tracks">
        <h1 className='tracks-main-heading'>Tracks We Offer</h1> 
        <p className='text-light fs-3'style={{textAlign:'center'}}>Here is a list of tracks we offer</p>  
        </div>
        <div className="opacity-regulator-tracks-hero">
        </div>    
    </div>
    <div className="tracks-section-for-cards">
        
    </div>
        </div>
  )
}

export default Trackshero