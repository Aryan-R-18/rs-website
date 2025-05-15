import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/WorkshopDetail.css';

const workshops = [
  {
    id: 1,
    title: 'Robotics Bootcamp',
    date: '17 March 2025',
    description: 'Hands-on Bootcamp on different domains of Robotics for the purpose of Induction.',
    image: '/images/w1.jpg',
    content: 'This workshop covers basic robotic principles, hands-on Arduino sessions, and teamwork challenges. Ideal for beginners.',
  },
  {
    id: 2,
    title: 'RoboXplore',
    date: '8 April 2025',
    description: 'Making of Line follower bot and sharing knowledge on Arduino',
    image: '/images/w2.jpg',
    content: 'Participants build a line follower robot and learn about sensors, logic building, and programming Arduino boards.',
  }
];

const WorkshopDetail = () => {
  const { id } = useParams();
  const workshop = workshops.find(w => w.id === parseInt(id));

  if (!workshop) {
    return <div className="container"><h2>Workshop Not Found</h2></div>;
  }

  return (
    <div className="workshop-detail container">
      <h1>{workshop.title}</h1>
      <p className="date">{workshop.date}</p>
      <img src={workshop.image} alt={workshop.title} className="workshop-image" />
      <p className="description">{workshop.description}</p>
      <div className="content">{workshop.content}</div>
    </div>
  );
};

export default WorkshopDetail;
