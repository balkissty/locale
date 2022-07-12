import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Profile from './components/Profile';
import Navbar from './components/Navbar'
import Users from './components/Users';
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup'
import useToken from './components/useToken';

function App() {
  const { token, setToken } = useToken();
  const Navigate = useNavigate();

  if(!token) {
    return <Login setToken={setToken} token={token} />
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="users" element={<Users />} />
        <Route element={<Navigate to="/" replace={true} />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
