import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Crafting visually stunning and highly functional websites that captivate your audience.',
      icon: 'fa fa-code'
    },
    {
      title: 'Mobile App Development',
      description: 'Developing cutting-edge mobile apps that seamlessly integrate with your business.',
      icon: 'fa fa-mobile-alt'
    },
    {
      title: 'Dashboard Design',
      description: 'Designing intuitive and visually appealing dashboards to help you make data-driven decisions.',
      icon: 'fa fa-chart-line'
    },
    {
      title: 'UI/UX Design',
      description: 'Crafting user-centric designs that enhance the overall experience of your digital products.',
      icon: 'fa fa-pencil-ruler'
    },
    {
      title: 'Digital Marketing',
      description: 'Implementing effective digital marketing strategies to drive traffic and increase conversions.',
      icon: 'fa fa-bullhorn'
    },
    {
      title: 'IT Consulting',
      description: 'Providing expert guidance and solutions to optimize your technology infrastructure.',
      icon: 'fa fa-cogs'
    }
  ];

  return (
    <div className="services-container">
      <h3 className="sectionName">Our services</h3>  
      <h2 className="services-title">Elevate Your Digital Presence</h2>
      <p className="services-subtitle">
        From stunning websites to powerful dashboards, we offer a wide range of services to help your business thrive in the digital landscape.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            {/* <i className={service.icon}></i> */}
            <h3><i className={service.icon}></i>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
