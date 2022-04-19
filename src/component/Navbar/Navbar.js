import React from 'react';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import './Navbar.css'
const Navbar = () => {
   const [user, loading, error] = useAuthState(auth);

  
    return (
      <nav className=" nav-header navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid container">
          <Link className="navbar-brand" to="/">Logo</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" to="/blogs">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-white" to="/about">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active text-white" to="/login">Login</Link>
              </li>
            </ul>
            <span className="navbar-text">
              {
                !user ? "USER" : <button onClick={() =>signOut(auth)}
                  type="button" className="btn btn-danger">Sing Out</button>
             }
            </span>
          </div>
        </div>
    </nav>
    );
};

export default Navbar;