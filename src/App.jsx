import { useEffect, useState } from 'react'
// import React from 'react'

import './App.css'
import Home from './Pages/Home/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Player from './Pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [count, setCount] = useState(0)

  const navigate = useNavigate();

useEffect(()=>{
onAuthStateChanged(auth, async (user) => {
  if(user){
    console.log("Logged In");
    navigate('/');
  }else{
    console.log("Logged OUt");
        navigate("/login");

  }
});

},[]);



  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App
