import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pagina/login/Login'
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './pagina/home/Home';
import './App.css';
import Cadastro from './pagina/cadastro/Cadastro';



function App() {
  return (
    <>
    <Router>
      <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes> // Antigo Switch
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </div>
          <Footer />
      </Router>
    </>
  );
}

export default App;
