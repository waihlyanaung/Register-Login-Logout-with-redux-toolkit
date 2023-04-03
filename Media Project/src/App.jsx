import React from 'react'
import "./App.css"
import { Route, Routes } from "react-router-dom";
import Register from './pages/Register'

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Dashboard/>} />
      
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App