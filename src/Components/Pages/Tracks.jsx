import React from 'react'
import Trackshero from '../Tracks/Trackshero/Trackshero'
import Trackscards from '../Tracks/Trackscard/Trackscards'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Tracksform from '../Tracks/Applyform/Tracksform'


function Tracks() {
  return (
    <div className='overall-tracks-page bg-light'>
      <Trackshero/>
      <Trackscards/>
      {/* <Tracksform/> */}
      </div>
  )
}

export default Tracks