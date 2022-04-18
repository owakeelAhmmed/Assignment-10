import React from 'react';
import './NotFound.css';
import img404 from '../images/404.png'



const NotFound = () => {
    return (
        <div className="container">
            <img className="w-50" src={img404} alt="" />
        </div>
    );
};

export default NotFound;