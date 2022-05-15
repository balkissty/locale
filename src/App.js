import './App.css';
import Homepage from './components/Homepage';
import Profile from './components/Profile';
import Navbar from './components/Navbar'
import Users from './components/Users';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="homepage" element={<Homepage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
