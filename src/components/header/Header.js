// src/components/Header.js
import React from 'react';
import { Link,HashRouter as Router } from 'react-router-dom';
import NavigationBar from '../navbar/Navbar';

function Header() {
  return (
    <header>
      <NavigationBar></NavigationBar>
      {/* <nav>
        <Link to="" >Home</Link>
        <Link to="about">About</Link>
        <Link to="Services">Services</Link>
        <Link to="contact">Contact</Link>
      </nav> */}
    </header>
  );
}

export default Header;
