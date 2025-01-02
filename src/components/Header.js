import React from 'react';
import './Header.css';
import logo from '../webglitch.png';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="#home">
          <img src={logo} alt="Logo" className="logo-image" />
          <span className="logo-text">WebGlitch</span>
        </a>
      </div>
      <nav>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
