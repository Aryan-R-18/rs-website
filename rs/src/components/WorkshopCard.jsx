import React from 'react';
import '../styles/WorkshopCard.css';

const WorkshopCard = ({ workshop }) => {
  return (
    <div className="workshop-card">
      <img 
        src={workshop.image} 
        alt={workshop.title} 
        className="workshop-image"
      />
      <div className="workshop-content">
        <div className="workshop-header">
          <h3>{workshop.title}</h3>
          <span className="workshop-date">{workshop.date}</span>
        </div>
        <p className="workshop-description">{workshop.description}</p>
        <div className="workshop-footer">
          <span className="workshop-duration">{workshop.duration}</span>
          <button className="btn btn-small">View Materials</button>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;