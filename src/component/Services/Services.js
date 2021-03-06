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
        
        <div className=" container mt-5">
          <h1 className=" text-center text-danger fw-bold mt-5">The Services</h1>
         
                <div className=" row gap-5 mt-5 p-5">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)  
                    }
                </div>
        
        </div>
    );
};

export default Services;