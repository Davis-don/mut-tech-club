import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Leadershiphero from '../Leadership/LeadershipHero/Leadershiphero'
import Leadershipabout from '../Leadership/Leadershipabout/Leadershipabout'

function Leadership() {
  return (
    <div className='overall-leadership-page'>
        <div className="about-hero-section">
        <Leadershiphero/>
        </div>
        <div className="coming-onboard-section">
       <Leadershipabout/>
        </div>
        <div className="meet-team-section">
  <h1 className='text-light'>Meet team</h1>
        </div>
        </div>
  )
}

export default Leadership