import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import MemberCard from '../components/MemberCard';
import CompetitionCard from '../components/CompetitionCard';
import '../styles/Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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

  const workshops = [
    {
      id: 1,
      title: 'Robotics Bootcamp',
      date: '17 March 2025',
      description: 'Hands-on Bootcamp on different domains of Robotics for the purpose of Induction.',
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

      <section className="workshops">
        <div className="container">
          <h2 className="section-title">Workshops Conducted</h2>
          <Carousel
            showArrows={true}
            autoPlay
            infiniteLoop
            showThumbs={false}
            className="workshop-carousel"
          >
            {workshops.map(workshop => (
              <div key={workshop.id}>
                <Link to={`/workshops/${workshop.id}`}>
                  <img src={workshop.image} alt={workshop.title} />
                  <div className="legend">
                    <h3>{workshop.title}</h3>
                    <p>{workshop.description}</p>
                    <small>{workshop.date}</small>
                  </div>
                </Link>
              </div>
            ))}
          </Carousel>
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
