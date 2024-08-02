import React from 'react';
import { scrollToSection } from '../utils/scrollToSection';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Unleash Your Digital Potential with WebGlitch</h1>
        <p>We are a team of passionate designers and developers who specialize in creating stunning websites, apps, and dashboards for businesses of all sizes.</p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={()=>scrollToSection('contact')}>Get in Touch</button>
          <button className="btn btn-secondary"onClick={()=>scrollToSection('portfolio')}>View Portfolio</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="" alt="Placeholder" />
      </div>
    </div>
  );
}

export default Hero;
