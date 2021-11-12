import React from 'react';
import { Row } from 'react-bootstrap';
import useServicehook from '../../hook/useServicehook';
import Services from '../services/Services';

const Servicesall = () => {
    // using custom hooks conditionally
    const [services] = useServicehook(false);
    return (
        <div>
            <div className="bg-dark mb-1">
                <h1 className="text-white mb-5 mt-2">
                    <span className="text-danger">OUR</span> SERVICES
                </h1>
                <Row xs={1} md={2} className="g-5 bg-dark">
                    {
                        services.map(service => <Services
                            key={service.key}
                            service={service}
                        >
                        </Services>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Servicesall;