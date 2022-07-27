// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Notestate from './context/notes/Notestate';
import Signup from './components/Signup';
import Login from './components/Login';


function App() {
  return (
    <Notestate>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Notestate >


  );
}

export default App;
