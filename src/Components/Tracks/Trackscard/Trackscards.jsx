import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Trackscard.css'
import Trackscomponent from '../Concern/Trackscomponent'



function Trackscards() {
  return (
    <div className='ovearall-cards-container bg-light'>
        <div className="header-text-tracks">
        <h1 className='our-tracks-main-title'>Our Tracks</h1>
        </div>



          <div className="overall-cards-holder-div">
            <div className="track-card">
            <Trackscomponent/>
            </div>
          </div>

        </div>
  )
}

export default Trackscards