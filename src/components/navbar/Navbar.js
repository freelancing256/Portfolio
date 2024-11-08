// src/components/NavigationBar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavigationBar.css"; // External CSS for styling
import { repository } from "../../data/servicesData";
const NavigationBar = () => {
  const location = useLocation(); // Hook to get the current location for active link highlighting

  return (
    <div className="navbar">
      <div className="logo-container">
        {/* Logo Image */}
        <img src={repository+"/logo.png"} alt="Vapour Harvest Logo" className="logo-img" />
        
        {/* Company Name */}
        <div className="company-name">Vapour Harvest Technology Solutions</div>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link
          to="/"
          className={location.pathname === "/" ? "active" : ""}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          About Us
        </Link>
        <Link
          to="/services"
          className={location.pathname === "/services" ? "active" : ""}
        >
          Services
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
