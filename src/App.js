import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './components/Homepage';
import Profile from './components/Profile';
import Navbar from './components/Navbar'
import Users from './components/Users';
import Login from './components/Login';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="users" element={<Users />} />
      </Routes>

    </div>
  );
}

export default App;
