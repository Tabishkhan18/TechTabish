import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Work from './components/Work'

function App() {
  
  return (
    <>
      <Navbar/>
      <Home/>
      <Skills/>
      <Projects/>
      <Work/>
      <About/>
      <Contact />
    </>
  )
}

export default App
