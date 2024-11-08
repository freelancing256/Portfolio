// src/components/HomeHero.js
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './HomeHero.css'; // Custom CSS for styles

const HomeHero = () => {
  return (
    <section className="home-hero">
      <div className="hero-overlay">
        <Container className="text-center">
          <h1 className="hero-title">Vapour Harvest Technology Solutions</h1>
          <p className="hero-description">
            Leading the way in cloud-based IT solutions for a smarter future.
          </p>
          <Button variant="primary" size="lg" href="#services" className="hero-btn">
            Get Started
          </Button>
        </Container>
      </div>
    </section>
  );
};

export default HomeHero;
