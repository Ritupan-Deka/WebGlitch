import React from 'react';
import './Work.css';

function Work() {
  const work = [
    {
      title: 'Project 1',
      description: 'Crafting visually stunning and highly functional websites that captivate your audience.'

    },
    {
      title: 'Project 2',
      description: 'Developing cutting-edge mobile apps that seamlessly integrate with your business.'

    },
    {
      title: 'Project 3',
      description: 'Crafting user-centric designs that enhance the overall experience of your digital products.'
    },
    {
      title: 'Project 4',
      description: 'Providing expert guidance and solutions to optimize your technology infrastructure.'
    }
  ];

  return (
    <div className="work-container">
      <h3 className="sectionName">Our Work</h3>  
      <h2 className="work-title">Showcasing Our Expertise</h2>
      <p className="work-subtitle">
        Take a look at some of our recent projects and see how we can help transform your digital presence.
      </p>
      <div className="work-grid">
        {work.map((work, index) => (
          <div className="work-card" key={index}>
            <i className={work.icon}></i>
            <h3>{work.title}</h3>
            <p>{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
