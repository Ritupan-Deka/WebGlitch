import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="Contact-container">
            <h3 className="sectionName">Get in touch</h3>
            <h2 className="Contact-title">Let's Discuss Your Project</h2>
            <p className="Contact-subtitle">
                Fill out the form below and one of our team members will get back to you.
            </p>
            <form className="Contact-form">
                <label>
                    <input type="text" name="name" placeholder='Your Name' required />
                </label>
                <label>
                    <input type="email" name="email" placeholder='Your Email' required />
                </label>
                <label>
                    <textarea name="message" placeholder='Type Your Message here..' required></textarea>
                </label>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact;


