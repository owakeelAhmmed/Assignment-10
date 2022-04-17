import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => { 
        fetch('data.json')
        .then(Response => Response.json())
        .then(data => setServices(data))
     },[])
       
    return (
        
        <div className=" container">
          
            <div className="row">
                <div className="col-md-3 col-lg-4 w-50">
                    {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)  
                }
                </div>
        </div>
        </div>
    );
};

export default Services;