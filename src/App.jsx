import { useState } from 'react'
// import React from 'react'

import './App.css'
import Home from './Pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Player from './Pages/Player/Player'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/player/:id' element={<Player/>} />
      </Routes>
      
    </div>
  );
}

export default App
