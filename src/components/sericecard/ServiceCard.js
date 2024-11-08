// src/components/CardWithHover.js
import React from 'react';
import './ServiceCard.css';

function ServiceCard({ title, imageSrc, description,linkUrl }) {
  return (
    <div className="card-with-hover">
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-image">
        <img src={imageSrc} alt={title} />
        <div className="overlay">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
