import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer py-4 bg-dark text-white">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Vapour Harvest Technology Solutions</h5>
            <p>Empowering businesses with cloud-based solutions and innovative IT services.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About Us</a></li>
              <li><a href="/services" className="text-white">Services</a></li>
              <li><a href="/contact" className="text-white">Contact Us</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: <a href="mailto:support@vapourharvest.com" className="text-white">support@vapourharvest.com</a></li>
              <li>Phone: +1 (800) 123-4567</li>
              <li>Address: 123 Cloud Ave, Tech City, CA</li>
            </ul>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col md={12} className="text-center">
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FaLinkedin size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <FaInstagram size={24} />
              </a>
            </div>
            <p className="pt-3">&copy; 2024 Vapour Harvest Technology Solutions. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
