import React, { useState } from 'react';
import MemberCard from '../components/MemberCard';
import '../styles/Team.css';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Team Lead',
      branch: 'Mechanical Engineering',
      year: 'Senior',
      projects: ['Autonomous Rover', 'Drone Navigation'],
      skills: ['CAD Design', 'Project Management', 'Prototyping'],
      bio: 'Passionate about autonomous systems and mechanical design.',
      image: '/images/member1.jpg'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Software Lead',
      branch: 'Computer Science',
      year: 'Junior',
      projects: ['Robotic Arm', 'AI Vision'],
      skills: ['Python', 'ROS', 'Computer Vision'],
      bio: 'Specializes in AI and machine learning applications for robotics.',
      image: '/images/member2.jpg'
    },
  ];

  return (
    <div className="team-page">
      <div className="container">
        <h1 className="section-title">Our Team</h1>
        
        {selectedMember ? (
          <div className="member-detail">
            <button className="back-btn" onClick={() => setSelectedMember(null)}>
              &larr; Back to Team
            </button>
            <div className="detail-content">
              <img 
                src={selectedMember.image} 
                alt={selectedMember.name} 
                className="detail-image"
              />
              <div className="detail-info">
                <h2>{selectedMember.name}</h2>
                <p className="role">{selectedMember.role}</p>
                <div className="detail-section">
                  <h3>About</h3>
                  <p>{selectedMember.bio}</p>
                </div>
                <div className="detail-section">
                  <h3>Academic Information</h3>
                  <p><strong>Branch:</strong> {selectedMember.branch}</p>
                  <p><strong>Year:</strong> {selectedMember.year}</p>
                </div>
                <div className="detail-section">
                  <h3>Current Projects</h3>
                  <ul>
                    {selectedMember.projects.map((project, index) => (
                      <li key={index}>{project}</li>
                    ))}
                  </ul>
                </div>
                <div className="detail-section">
                  <h3>Skills</h3>
                  <div className="skills">
                    {selectedMember.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="team-grid">
            {teamMembers.map(member => (
              //Yeh React ko bolta hai: “MemberCard ko ek prop bhej raha hoon jiska naam member hai, aur uski value member object hai.”
              <MemberCard 
                key={member.id} 
                member={member} 
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;