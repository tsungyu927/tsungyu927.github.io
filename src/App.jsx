import React from 'react'
import { Element } from 'react-scroll'
// import { Routes, Route } from 'react-router-dom'
import './styles/App.scss'
// import container
import { Navbar } from './components'
import {
  Home, About, Experience, Skills, Work,
} from './container'
// animate
import 'animate.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Element name="home" className="element">
        <Home />
      </Element>
      <Element name="about" className="element">
        <About />
      </Element>
      <Element name="experience" className="element">
        <Experience />
      </Element>
      <Element name="skills" className="element">
        <Skills />
      </Element>
      <Element name="work" className="element">
        <Work />
      </Element>
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
    </div>
  )
}

export default App
