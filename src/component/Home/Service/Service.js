import React from 'react';

const service = ({service}) => {
    const {name, image} = service;
    return (
        <div className="container">
            <div className="row">
            <div className="">
                <div>
                    <img src={image} alt="" />
                </div>
                <h1 className="text-danger">{name}</h1>
                <button className="btn btn-danger">Buy Now</button>
            </div>
                
          </div>
        </div>
    );
};

export default service;