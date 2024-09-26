import { useState } from 'react'
import Header from './Components/Header/Header'
import './App.css'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Testimonial from './Components/Testimonials/Testimonial'
import Footer from './Components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './Components/Pages/Homepage'
import Leadership from './Components/Pages/Leadership'
import Tracks from './Components/Pages/Tracks'
import Events from './Components/Pages/Events'

function App() {


  return (
    <div className='app'>

<BrowserRouter>
  <Header/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/leadership" element={<Leadership/>} />
        <Route path="/tracks" element={<Tracks/>} />      
        <Route path="/events" element={<Events/>} />   

      </Routes>
      <Footer/>
    </BrowserRouter>


    </div>
  )
}

export default App
