import React from 'react';
import './Footer.css';
const Footer = () => {
    const todays = new Date();
    const year = todays.getFullYear();
    return (
        <footer className="container-fluid footer-container p-5 border-top border-danger text-center mt-5 ">
            <div className="">
                <p><small className="text-warning mb-5"> &copy; copyright { year }</small></p>
            </div>
            
        </footer>
        
        );
};

export default Footer;