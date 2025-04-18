import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import MemberCard from '../components/MemberCard';
import WorkshopCard from '../components/WorkshopCard';
import CompetitionCard from '../components/CompetitionCard';
import '../styles/Home.css';

const Home = () => {
  const latestProjects = [
    {
      id: 1,
      title: 'Autonomous Rover',
      description: 'Developing a Mars rover prototype with autonomous navigation capabilities.',
      image: '/images/rover.jpg',
      status: 'In Progress'
    },
    {
      id: 2,
      title: 'Robotic Arm',
      description: '6-axis robotic arm with computer vision for object manipulation.',
      image: '/images/robotic-arm.jpg',
      status: 'Completed'
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Team Lead',
      branch: 'Mechanical Engineering',
      projects: ['Autonomous Rover', 'Drone Navigation'],
      image: '/images/member1.jpg'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Software Lead',
      branch: 'Computer Science',
      projects: ['Robotic Arm', 'AI Vision'],
      image: '/images/member2.jpg'
    }
  ];

  const workshops = [
    {
      id: 1,
      title: 'Robotics Bootcamp',
      date: '17 March 2025',
      description: 'Hands-on Bootcamp on differentdomains of Robotics for the purpose of Induction.',
      image: '/images/w1.jpg'
    },
    {
      id: 2,
      title: 'RoboXplore',
      date: '8 April 2025',
      description: 'Making of Line follower bot and sharing knowledge on Arduino',
      image: '/images/w2.jpg'
    }
  ];

  const competitions = [
    {
      id: 1,
      name: 'Smart India Hackathon',
      year: '2024',
      achievement: 'Finalists',
      image: '/images/comp2.jpg'
    },
    {
      id: 2,
      name: 'Innovision at NIT Rourkela',
      year: '2024',
      achievement: 'Winner',
      image: '/images/comp1.jpg'
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>Innovating the Future of Robotics</h1>
          <p>Join us in building cutting-edge robotic solutions to real-world problems.</p>
          <Link to="/about" className="btn">
          Learn More
        </Link>
        </div>
      </section>

      <section className="latest-projects">
        <div className="container">
          <h2 className="section-title">Latest Projects</h2>
          <div className="projects-grid">
            {latestProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="team-projects">
        <div className="container">
          <h2 className="section-title">Who's Working On What</h2>
          <div className="card-grid">
            {teamMembers.map(member => (
              <MemberCard key={member.id} member={member} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="workshops">
        <div className="container">
          <h2 className="section-title">Workshops Conducted</h2>
          <div className="card-grid">
            {workshops.map(workshop => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))}
          </div>
        </div>
      </section>

      <section className="competitions">
        <div className="container">
          <h2 className="section-title">Competitions Participated</h2>
          <div className="card-grid">
            {competitions.map(competition => (
              <CompetitionCard key={competition.id} competition={competition} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;