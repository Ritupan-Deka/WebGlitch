import React from 'react';
import './Team.css';

function Team() {
  const Team = [
    {
      title: 'Name 1',
      description: 'Designation.'
    },
    {
      title: 'Name 2',
      description: 'Designation.'
    },
    {
      title: 'Name 3',
      description: 'Designation.'
    },
    {
      title: 'Name 4',
      description: 'Designation.'
    }
  ];

  return (
    <div className="Team-container">
      <h3 className="sectionName">Our Team</h3>  
      <h2 className="Team-title">Meet the WebGlitch Crew</h2>
      <p className="Team-subtitle">
        Our talented team of designers, developers, and strategists are dedicated to delivering exceptional digital solutions for our clients.
      </p>
      <div className="Team-grid">
        {Team.map((Team, index) => (
          <div className="Team-card" key={index}>
            <i className={Team.icon}></i>
            <h3>{Team.title}</h3>
            <p>{Team.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;

