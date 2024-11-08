// src/pages/Home.js
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaCloud, FaShareAlt, FaCode, FaTools, FaMicrosoft, FaPython, FaPhp } from 'react-icons/fa';  // Importing icons
import { SiDotnet } from 'react-icons/si';  // For .NET
import './Home.css';  // Custom CSS file for styles
import HomeHero from "../../components/homecarousel/HomeHero"; 


const Home = () => {
  return (
    <div className="home-container">
      {/* Introduction Section */}
      <section className="intro-section text-center py-5">
        <HomeHero></HomeHero>
        {/* <Container>
          <h1 className="display-4 font-weight-bold custom-header-title">
            Vapour Harvest Technology Solutions
          </h1>
          <p className="lead text-muted custom-header-description">
            Innovating IT services and cloud-based solutions that drive business growth and digital transformation.
          </p>
          <Button variant="primary" size="lg" href="#contact" className="mt-4 custom-btn">
            Get in Touch
          </Button>
        </Container> */}
      </section>

      {/* Our Services Section */}
      <section className="services-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5 font-weight-bold">Our Services</h2>

          <Row>
            {/* Web Application Development */}
            <Col md={6} className="mb-4">
              <Card className="service-card shadow-sm">
                <Card.Body>
                  <div className="service-icon">
                    <FaCode size={40} color="#007bff" />
                  </div>
                  <Card.Title className="service-card-title service-card-title-home">Web Application Development</Card.Title>
                  <Card.Text>
                    We specialize in creating custom, scalable, and secure web applications. Using cutting-edge technologies like .NET Core, Python, and PHP, we craft tailored solutions that fit your business needs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* SharePoint Portals and Migrations */}
            <Col md={6} className="mb-4">
              <Card className="service-card shadow-sm">
                <Card.Body>
                  <div className="service-icon">
                    <FaShareAlt size={40} color="#007bff" />
                  </div>
                  <Card.Title className="service-card-title service-card-title-home">SharePoint Portals and Migrations</Card.Title>
                  <Card.Text>
                    Enhance collaboration and productivity with customized SharePoint solutions, seamless data migration, and SharePoint framework integration for a smarter, more collaborative environment.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            {/* K2 Process Automation */}
            <Col md={6} className="mb-4">
              <Card className="service-card shadow-sm">
                <Card.Body>
                  <div className="service-icon">
                    <FaTools size={40} color="#007bff" />
                  </div>
                  <Card.Title className="service-card-title service-card-title-home">K2 Process Automation</Card.Title>
                  <Card.Text>
                    Streamline your business workflows with K2. We help automate and optimize processes, reducing time spent on manual tasks while ensuring consistency and accuracy.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Azure Cloud Solutions */}
            <Col md={6} className="mb-4">
              <Card className="service-card shadow-sm">
                <Card.Body>
                  <div className="service-icon">
                    <FaCloud size={40} color="#007bff" />
                  </div>
                  <Card.Title className="service-card-title service-card-title-home">Azure Cloud Solutions</Card.Title>
                  <Card.Text>
                    Leverage Microsoft Azure to scale and secure your applications. We offer cloud app services, storage solutions, and seamless integration to boost business efficiency.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            {/* DevOps Solutions */}
            <Col md={6} className="mb-4">
              <Card className="service-card shadow-sm">
                <Card.Body>
                  <div className="service-icon">
                    <FaTools size={40} color="#007bff" />
                  </div>
                  <Card.Title className="service-card-title service-card-title-home">DevOps Solutions</Card.Title>
                  <Card.Text>
                    Accelerate your software development lifecycle with our DevOps solutions. From infrastructure provisioning to automated application deployments, we help you maintain high availability and reliability.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Technologies We Use Section */}
      <section className="technologies-section py-5">
        <Container>
          <h2 className="text-center mb-5 font-weight-bold">Technologies We Use</h2>
          
          <div className="technologies-container">
            <div className="tech-pill"><SiDotnet size={40} /> .NET Core</div>
            <div className="tech-pill"><FaPython size={40} /> Python</div>
            <div className="tech-pill"><FaPhp size={40} /> PHP</div>
            <div className="tech-pill"><FaCloud size={40} /> Azure</div>
            <div className="tech-pill"><FaShareAlt size={40} /> SharePoint</div>
            <div className="tech-pill"><FaTools size={40} /> K2</div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us py-5">
        <Container>
          <h2 className="text-center mb-4 font-weight-bold">Why Choose Us?</h2>
          <Row>
            <Col md={4}>
              <Card className="text-center shadow-sm">
                <Card.Body>
                  <Card.Title className="service-card-title-home">Cloud & Automation Expertise</Card.Title>
                  <Card.Text>
                    With our deep expertise in **Azure Cloud** and **K2 automation**, we bring real value to your business processes.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center shadow-sm">
                <Card.Body>
                  <Card.Title className="service-card-title-home">End-to-End Service</Card.Title>
                  <Card.Text>
                    From **web application development** to **DevOps**, we handle every stage of your project with attention to detail.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-center shadow-sm">
                <Card.Body>
                  <Card.Title className="service-card-title-home">Customer-Centric Approach</Card.Title>
                  <Card.Text>
                    We prioritize building long-term partnerships with our clients by delivering high-quality, customized solutions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section text-center py-5 bg-primary text-white">
        <Container>
          <h2>Ready to Take Your Business to the Next Level?</h2>
          <p className="lead mb-4">
            Let’s build innovative, secure, and scalable cloud-based solutions together. Contact us today to get started.
          </p>
          <Button variant="light" size="lg" href="#contact">
            Contact Us
          </Button>
        </Container>
      </section>
    </div>
  );
};

export default Home;
