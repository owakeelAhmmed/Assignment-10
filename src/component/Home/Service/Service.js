import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const service = ({service}) => {
    const {name, image, description} = service;
    return (
        <div className=" service-card  col-sm-12 col-md-6 col-lg-4  " >
            <div className="card-img">
                 <img src={image} className=" p-3" alt="..."/>
            </div>
            <div className="">
                    <h5 className="card-title text-danger">{ name }</h5>
                <p className=" text-primary p-3">{ description }</p>
                 <Link className="nav-link btn btn-danger text-white fs-5 fw-bold w-50 mb-5" to="pricing">Buy Now</Link>
            </div>
        </div>
    );
};

export default service;