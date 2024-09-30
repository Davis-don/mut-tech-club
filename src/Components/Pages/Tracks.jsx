import React from 'react'
import Trackshero from '../Tracks/Trackshero/Trackshero'
import Trackscards from '../Tracks/Trackscard/Trackscards'
import 'bootstrap/dist/css/bootstrap.min.css'



function Tracks() {
  return (
    <div className='overall-tracks-page bg-light'>
      <Trackshero/>
      <Trackscards/>
      
      </div>
  )
}

export default Tracks