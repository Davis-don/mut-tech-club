import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Eventcard.css'
import dataEvents from './Eventsdata'
import Trackscomponent from '../../Tracks/Concern/Trackscomponent'

function Eventcard() {
  return (
    <div className='overall-event-card-container bg-light'>
        <h1 className='event-card-main-title text-dark'>Events</h1>
        <h3 style={{textAlign:'center'}}>Events scheduling</h3>
        <Trackscomponent dataTracks={dataEvents} />
        </div>
  )
}

export default Eventcard