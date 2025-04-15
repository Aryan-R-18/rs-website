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
            The Robotics Society is dedicated to fostering innovation and excellence in robotics 
            through hands-on projects, workshops, and competitions. We aim to provide students 
            with the skills and experience needed to excel in the field of robotics and automation.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Our History</h2>
          <p>
            Founded in 2010, the Robotics Society has grown from a small group of enthusiasts 
            to a premier organization with over 100 active members. We've participated in 
            numerous national and international competitions, winning several awards for our 
            innovative designs.
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