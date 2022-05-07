import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './style/App.css'
// import container
import Home from './container/Home'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
