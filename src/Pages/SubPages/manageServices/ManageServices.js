import React, { useEffect, useState } from 'react';
import { Spinner } from "react-bootstrap";


const ManageServices = () => {
    const [services, setService] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`https://frozen-refuge-45390.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => {
                setService(data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);

            })
    }, [setService, setIsLoading]);
    // Delete Api

    const handleDelete = id => {
        const url = `https://frozen-refuge-45390.herokuapp.com/services/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = services.filter(service => service._id !== id);
                    setService(remaining);
                    console.log(error);

                }

            })
    }
    return (
        <div>

            {
                isLoading ? (
                    <Spinner animation="border" variant="info" />
                ) : (
                    services.map(service => <div key={service._id}>

                        <div className="d-flex justify-content-around align-items-center">

                            <div className="w-50 mb-5" >
                                <h6 >Service Name: {service.name}</h6>
                            </div>
                            <div className="w-50 mb-5">
                                <img className="w-50 rounded-pill" src={service.img} alt="" />
                            </div>
                            <div className="w-25 mb-5">
                                <button className="btn btn-outline-danger" onClick={() => handleDelete(service._id)}>Delete</button>

                            </div>
                        </div>
                    </div>)
                )
            }
        </div>
    );
};

export default ManageServices;


