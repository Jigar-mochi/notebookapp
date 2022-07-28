import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Notestate from './context/notes/Notestate';
import Signup from './components/Signup';
import Login from './components/Login';
import Succ from './components/Succ';


function App() {
  return (
    <Notestate>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="succ" element={<Succ />} />
        </Routes>
      </BrowserRouter>
    </Notestate >


  );
}

export default App;
