// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';

import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
