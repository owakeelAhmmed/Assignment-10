import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <div className="container"> 
      <nav className=" navbar navbar-expand-lg navbar-light bg-dark ">
          <div className="container-fluid">
            <div>
               <Link className="navbar-brand text-danger fw-bold" to="/">Logo</Link>
           </div>
           
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active text-danger fs-5 fw-bold" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-danger fs-5 fw-bold" to="services">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-danger fs-5 fw-bold" to="login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-danger fs-5 fw-bold" to="register">Register</Link>
                </li>
              </ul>
            </div>
          
          </div>
      </nav> 



        </div>
    );
};

export default Header;