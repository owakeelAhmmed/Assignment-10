import React from 'react';
import './Service.css'
const service = ({service}) => {
    const {name, image} = service;
    return (
        <div className=" service-card  col-sm-12 col-md-6 col-lg-4  " >
            <div className="card-img">
                 <img src={image} className=" p-3" alt="..."/>
            </div>
            <div className="">
                    <h5 className="card-title text-danger">{ name }</h5>
                <p className=" text-primary p-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary mb-4">Go somewhere</a>
            </div>
        </div>
    );
};

export default service;