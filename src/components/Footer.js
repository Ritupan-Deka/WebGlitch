import React, { useEffect, useState } from 'react';

import './Footer.css';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);
    return(
    <div className="Footer-container">
        <div className="Footer-content">
            {/* <div className="Footer-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#contact">Contact</a>
            </div> */}
            <div className="Footer-credit">
                &copy; {currentYear} WebGlitch. All rights reserved.
            </div>
        </div>
        <button id="scroll-to-top" style={{ display: 'none' }}>
            &#8593; Top
        </button>
    </div>
  );
};

export default Footer;
