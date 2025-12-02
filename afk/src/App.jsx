import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import './App.css'
import About from './assets/About_Page'
import Home from './assets/Home_Page'

function App() {
  useEffect(() => {
    document.title = 'S. Kitt Wong'
  })
  return (
    <BrowserRouter> 
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
