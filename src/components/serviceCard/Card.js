// src/components/ProjectCard.js
import React from 'react';
import "./Card.css";
function Card({ title,description,children,id }) {
  return (
    <div className="service-card" id={id}>
      <h3>{title}</h3> 
      <p>{description}</p>
     <div style={{width:"auto"}}>
      {children}
     </div>
    </div>
  );
}

export default Card;
