
import React from 'react';
import "./Services.css";
import serviceData from '../../data/servicesData';
import ServiceCard from "../../components/sericecard/ServiceCard";
import Card from "../../components/serviceCard/Card"
function Services() {
  return (
    <section>
      <h2>Our Services</h2>
      <div className="portfolio-grid">
        {
          serviceData.map((service) =>
            <Card title={service.ServiceName} description={service.ServiceDescription} id={service.Id} >
              <div className='technology-section'>
                {service.Technologies.map((technology) => (
                  <ServiceCard title={technology.Title} description={technology.Description} imageSrc={technology.ImageUrl} linkUrl={service.LinkUrl} />
                ))}
              </div>

            </Card>
          )
        }

      </div>
    </section>
  );
}

export default Services; 
