import React from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Testimonial from '../Testimonials/Testimonial'
import Footer from '../Footer/Footer'


function Homepage() {
  return (
    <div className='overall-homepage-container'>
        
        <Hero/>
        <About/>
        <Testimonial/>

    </div>
  )
}

export default Homepage