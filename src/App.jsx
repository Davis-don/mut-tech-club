import { useState } from 'react'
import Header from './Components/Header/Header'
import './App.css'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Testimonial from './Components/Testimonials/Testimonial'
import Footer from './Components/Footer/Footer'

function App() {


  return (
    <div className='app'>
      <Header/>
      <Hero/>
      <About/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App
