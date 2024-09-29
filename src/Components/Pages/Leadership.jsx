import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Leadershiphero from '../Leadership/LeadershipHero/Leadershiphero'
import Leadershipabout from '../Leadership/Leadershipabout/Leadershipabout'
import Leadersdescribe from '../Leadership/Leadershipleadersdescription/Leadersdescribe'

function Leadership() {
  return (
    <div className='overall-leadership-page bg-light'>
        <div className="about-hero-section">
        <Leadershiphero/>
        </div>
        <div className="coming-onboard-section bg-light">
       <Leadershipabout/>
        </div>
        <div className="meet-team-section bg-light">
  <Leadersdescribe/>
        </div>
        </div>
  )
}

export default Leadership