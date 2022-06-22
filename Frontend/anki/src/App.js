import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './Pages/Home';
import Container from './Layout/Container';
import Navbar from './Components/Navbar';
import Login from './Pages/Login';
import Registro from './Pages/Registro';

export default function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Container className="min-heigth">
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/Login" element={<Login></Login>}></Route>
          <Route exact path="/Registrar" element={<Registro></Registro>}></Route>
        </Routes>
      </Container>
    </Router>
  );
}

