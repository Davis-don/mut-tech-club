import { useState } from 'react'
import Header from './Components/Header/Header'
import './App.css'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'

function App() {


  return (
    <div className='app'>
      <Header/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App
