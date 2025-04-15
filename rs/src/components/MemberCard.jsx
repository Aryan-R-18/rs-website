import React from 'react';
import '../styles/MemberCard.css';

const MemberCard = ({ member, onClick, compact }) => {
  if (compact) {
    return (
      <div className="member-card compact" onClick={onClick}>
        <img src={member.image} alt={member.name} className="member-image" />
        <div className="member-info">
          <h3>{member.name}</h3>
          <p className="role">{member.role}</p>
          <p className="branch">{member.branch}</p>
          <div className="projects">
            <h4>Projects:</h4>
            <ul>
              {member.projects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="member-card" onClick={onClick}>
      <img src={member.image} alt={member.name} className="member-image" />
      <div className="member-info">
        <h3>{member.name}</h3>
        <p className="role">{member.role}</p>
        <button className="view-btn">View Profile</button>
      </div>
    </div>
  );
};

export default MemberCard;