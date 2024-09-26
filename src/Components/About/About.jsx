import React from 'react'
import './about.css'
import neuralNet from '../../assets/growtika-nGoCBxiaRO0-unsplash.jpg'

function About() {
  return (
    <div className='ovearall-overall-container'>
      <div className="about-us-top">
        <div className="text-box-about">
        <h3  className='text-dark'>Welcome To Official Site Of  MUT Tech Club </h3>
        <p className='welcome-text-p' style={{textAlign:'center'}}>Step into the world of Technology and Innovations</p>
        </div>
        
      </div>





    <div className='overall-about-section'>
        <div className="left-about-us-section">
          <img src={neuralNet}/>
        </div>




        <div className="right-about-us-section">
        <h2  style={{textAlign:'center'}} className='text-light '>About Us</h2>
            <div className="mission-section">
          <h3 style={{textAlign: 'center'}} className='text-light title-styling-about'>Our mission</h3>
          <p style={{textAlign: 'center'}} className='text-light apply-font'>To empower members with cutting-edge technological knowledge, fostering growth, innovation, and collaboration in a rapidly evolving digital landscape.</p>
            </div>
            <div className="vission-section">
            <h3 style={{textAlign: 'center'}} className='text-light title-styling-about'>Our Vission</h3>
              <p style={{textAlign: 'center'}} className='text-light apply-font'>To be a leading hub for aspiring technologists, driving innovation and shaping the future through collaborative learning and cutting-edge projects.</p>
            </div>
            <div className="values">
            <h3 style={{textAlign: 'center'}} className='text-light title-styling-about'>Our Values</h3>

             <ul className='list-unstyled'>
              <li style={{textAlign: 'center'}} className='text-light '><b>Innovation:</b>Embrace creativity and forward-thinking approaches.</li>
              <li style={{textAlign: 'center'}} className='text-light '><b>Collaboration:</b>Encourage teamwork and knowledge-sharing.</li>
              <li style={{textAlign: 'center'}} className='text-light '><b>Growth:</b>upport continuous learning and personal development.</li>
              <li style={{textAlign: 'center'}} className='text-light '><b>Integrity:</b>Uphold honesty and ethical standards in all activities.              </li>

             </ul>
            </div>

            <div className="Objectives">
            <h3 style={{textAlign: 'center'}} className='text-light title-styling-about'>Our Objectives</h3>

             <ul className='list-unstyled'>
              <li style={{textAlign: 'center'}} className='text-light '>Provide resources for learning emerging technologies</li>
              <li style={{textAlign: 'center'}} className='text-light'>Facilitate hands-on projects and workshops.</li>
              <li style={{textAlign: 'center'}} className='text-light'>Create networking opportunities with industry professionals.</li>
              <li style={{textAlign: 'center'}} className='text-light '>Inspire innovation through collaborative initiatives and challenges.</li>


             </ul>
            </div>
            
        </div>


        </div>


        </div>
  )
}

export default About