// src/pages/Home.js
import React from 'react';
import "./Home.css";
function Home() {
  return (
    <section className="home">
    {/* Hero Section */}
    <div className="hero">
      <h1>Welcome to [Your Company Name]</h1>
      <p>Your trusted partner in delivering innovative IT solutions. We specialize in custom web development, mobile applications, and digital transformation services.</p>
      <button className="cta-button">Contact Us</button>
    </div>

    {/* Skills Section */}
    <div className="skills">
      <h2>Our Expertise</h2>
      <p>We bring a deep understanding of development, design, and business processes, with skills in the following areas:</p>
      <ul>
        <li>Custom Web Development</li>
        <li>Cloud Solutions & Architecture</li>
        <li>Data Analytics & Visualization</li>
        <li>API Development & Integration</li>
        <li>DevOps & CI/CD</li>
      </ul>
    </div>

    {/* Services Section */}
    <div className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        <div className="service-card">
          <h3>Web Development</h3>
          <p>We develop responsive, high-performance websites that align with your business goals and provide a seamless user experience.</p>
        </div>
        <div className="service-card">
          <h3>Mobile App Development</h3>
          <p>Our team builds cross-platform mobile apps that are fast, reliable, and designed to scale as your user base grows.</p>
        </div>
        <div className="service-card">
          <h3>Cloud Solutions</h3>
          <p>Leverage our expertise in cloud architecture to migrate, manage, and optimize your operations with top cloud providers.</p>
        </div>
      </div>
    </div>

    {/* Technologies Section */}
    <div className="technologies">
      <h2>Technologies We Use</h2>
      <p>We stay up-to-date with the latest technologies to ensure efficient, secure, and scalable solutions for our clients:</p>
      <ul className="tech-list">
        <li>Frontend: React, Angular, Vue, HTML5, CSS3</li>
        <li>Backend: Node.js, Express, .NET, Django, Spring Boot</li>
        <li>Mobile: React Native, Flutter, Swift, Kotlin</li>
        <li>Cloud & DevOps: AWS, Azure, Google Cloud, Docker, Kubernetes</li>
        <li>Data: MySQL, PostgreSQL, MongoDB, Redis</li>
        <li>Other: Git, Jenkins, Terraform, Elasticsearch</li>
      </ul>
    </div>
  </section>
  );
}

export default Home;
