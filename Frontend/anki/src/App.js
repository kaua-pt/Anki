import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './Pages/Home';
import Container from './Layout/Container';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';

export default function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Container>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/Login" element={<Login></Login>}></Route>
        </Routes>
      </Container>
    </Router>
  );
}

