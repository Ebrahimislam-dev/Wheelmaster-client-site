import React from 'react';
import { Row, Spinner } from "react-bootstrap";
import './Services.css'

import ServiceCard from './ServiceCard';
import { useState } from "react";
import { useEffect } from 'react';


const Services = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    console.log(error);
    // loading data from database 
    useEffect(() => {
        setIsLoading(true);
        fetch('https://frozen-refuge-45390.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);

            })
    }, [setServices, setIsLoading]);

    return (
        <div className='services'>
            <h1 className="heading mb-5 mt-1">
                Our <span className="text-danger"> Service's </span>
            </h1>



            {
                isLoading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                ) : (
                    <div className="container-fluid  mb-1">

                        <Row xs={1} md={3} className="g-3 ">
                            {
                                services?.map(service => <ServiceCard
                                    key={service._id}
                                    service={service}

                                >
                                </ServiceCard>)

                            }
                        </Row>
                    </div>
                )
            }


        </div>
    );
};

export default Services;