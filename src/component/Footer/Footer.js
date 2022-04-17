import React from 'react';
import './Footer.css';
const Footer = () => {
    const todays = new Date();
    const year = todays.getFullYear();
    return (
        <footer className="">
            <p><small className="text-danger mb-5"> &copy; copyright { year }</small></p>
        </footer>
        
        );
};

export default Footer;