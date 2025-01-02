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
            <div className="Footer-credit">
                &copy; {currentYear} WebGlitch. All rights reserved.
            </div>
        </div>
        <div id="scroll-to-top" >
           <a href="#home">&#8593;</a>
        </div>
    </div>
  );
};

export default Footer;
