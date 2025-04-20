import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1 className="section-title">About Us</h1>
        
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
          Developing new ideas in the field of Robotics and Technology to enable students to learn new Technologies, assimilate appropriate skills creating innovations which solve real world problems and improve the quality of life by training them with strength of character, leadership and self-attainment.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Our History</h2>
          <p>
          The Robotics Club is an OFFICIAL TECHNICAL club of VSSUT, Burla which encourages various technical activities and projects in the field of amateur as well as advanced Robotics, in the University. The members are a bunch of budding technocrats who are driven by an acute zest for learning technological advancements and happenings in the modern world, and endeavour in applying the theoretical learning into realistic projects.
          </p>
        </section>
        
        <section className="about-section">
          <h2>What We Do</h2>
          <div className="activities">
            <div className="activity-card">
              <h3>Projects</h3>
              <p>
                We work on cutting-edge robotics projects ranging from autonomous vehicles 
                to robotic arms and AI-powered systems.
              </p>
            </div>
            <div className="activity-card">
              <h3>Workshops</h3>
              <p>
                Regular workshops on topics like ROS, CAD design, embedded systems, and 
                machine learning for robotics.
              </p>
            </div>
            <div className="activity-card">
              <h3>Competitions</h3>
              <p>
                We participate in national and international robotics competitions to test 
                our skills against the best.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;