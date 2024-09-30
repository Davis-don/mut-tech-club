import React from 'react'
import Trackshero from '../Tracks/Trackshero/Trackshero'
import Trackscards from '../Tracks/Trackscard/Trackscards'
import 'bootstrap/dist/css/bootstrap.min.css'
import Tracksform from '../Tracks/Applyform/tracksform'

function Tracks() {
  return (
    <div className='overall-tracks-page'>
      <Trackshero/>
      <Trackscards/>
      <Tracksform/>
      </div>
  )
}

export default Tracks