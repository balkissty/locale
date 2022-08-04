import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Home from './components/Home';
import Profile from './components/Profile';
import Navigation from './components/Navigation';
import Navbar from './components/Navbar'
import Users from './components/Users';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup'
import useToken from './components/useToken';
import NotFound  from "./components/NotFound";

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} token={token} />
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="navigation" element={<Navigation />} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="users" element={<Users />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
