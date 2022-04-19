import React from 'react';
import './Pricing.css'




const Pricing = () => {
    return (
    <div className="card-group container gap-5 mt-5">
        <div className="card service-card">
            <div className="card-body">
                <h5 className="card-title fs-1 text-center text-danger">Basic</h5>
                <p className="card-text text-center text-danger">Free Lunch</p>
                <p className="card-text "><small className="text-muted  text-danger">Free Ebook</small></p>
                <p className="card-text "><small className="text-muted">2 Times Per-week</small></p>
                <p className="card-text "><small className="text-muted">15 Online Session</small></p>
                <p className="card-text "><small className="text-muted">Free Sharing Session</small></p>
                <h2 className="text-primary">$23.00</h2>
                <button className="btn btn-success">Get Started</button>
            </div>
        </div>
        <div className="card service-card">
            <div className="card-body">
                <h5 className="card-title fs-1 text-danger text-center">Premium</h5>
                <p className="card-text text-center text-danger">Free Lunch</p>
                <p className="card-text "><small className="text-muted  text-danger">Free Ebook</small></p>
                <p className="card-text "><small className="text-muted">5 Times Per-week</small></p>
                <p className="card-text "><small className="text-muted">25 Online Session</small></p>
                <p className="card-text "><small className="text-muted">Free Sharing Session</small></p>
                <h2 className="text-danger">$74.00</h2>
                <button className="btn btn-success">Get Started</button>
            </div>
        </div>
        <div className="card service-card">
            <div className="card-body">
                <h5 className="card-title text-center fs-1 text-danger">Personal</h5>
                <p className="card-text text-center text-danger">Free Lunch</p>
                <p className="card-text "><small className="text-muted   text-center text-danger">Free Ebook</small></p>
                <p className="card-text "><small className="text-muted text-center">4 Times Per-week</small></p>
                <p className="card-text "><small className="text-muted text-center">20 Online Session</small></p>
                <p className="card-text "><small className="text-muted text-center">Free Sharing Session</small></p>
                <h2 className="text-primary">$53.00</h2>
                <button className="btn btn-success">Get Started</button>
            </div>
        </div>
</div>
    );
};

export default Pricing;