import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./About.css";

const AboutUs = () => {
  return (
    <section id="about-us" className="about-us-section py-5">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h2 className="section-title">About Us</h2>
            <p className="section-description">
              At Vapour Harvest Technology Solutions, we specialize in delivering cutting-edge, cloud-based IT solutions that empower businesses to grow and succeed in the digital age. With a focus on providing robust, scalable, and efficient cloud applications, we help organizations modernize their infrastructure, streamline operations, and optimize their IT strategies for long-term success.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h3>Our Mission</h3>
            <p>
              Our mission is to bring innovative technology solutions to the forefront of business transformation. We are committed to helping organizations leverage the full potential of cloud services, ensuring flexibility, scalability, and security, all while reducing operational costs.
            </p>
          </Col>
          <Col md={6}>
            <h3>What We Do</h3>
            <ul>
              <li>Web Application Development</li>
              <li>Azure Solutions</li>
              <li>SharePoint Portals and Migrations</li>
              <li>Process Automation with K2</li>
              <li>DevOps Solutions</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h3>Why Choose Us</h3>
            <ul>
              <li><strong>Expertise in Cloud Technologies</strong>: Years of experience in cloud computing and application development.</li>
              <li><strong>Tailored Solutions</strong>: Bespoke solutions aligned with your specific business goals.</li>
              <li><strong>End-to-End Support</strong>: From consultation to post-launch support, we offer comprehensive services.</li>
              <li><strong>Customer-Centric Approach</strong>: We work closely with clients to ensure successful project delivery.</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h3>Our Values</h3>
            <ul>
              <li><strong>Innovation</strong>: Pushing the boundaries of technology to deliver creative solutions.</li>
              <li><strong>Integrity</strong>: Honest communication and a commitment to doing what’s right.</li>
              <li><strong>Collaboration</strong>: Working hand-in-hand with clients for seamless integration.</li>
              <li><strong>Excellence</strong>: We maintain the highest standards in everything we do.</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h3>Our Vision</h3>
            <p>
              To become a trusted partner for organizations looking to harness the power of cloud technologies, helping them thrive in a rapidly evolving digital landscape. We aim to empower businesses of all sizes to embrace innovation, achieve operational efficiency, and stay ahead of the competition.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
