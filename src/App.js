import './App.css';
import Navbar from "./components/Navbar";
import Homepage from './components/Homepage';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Profile />
    </div>
  );
}

export default App;
