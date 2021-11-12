import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css'

const ServiceCard = ({ service }) => {

    // destructuring
    const { _id, name, price, description, img } = service;

    return (
        <div className="container-fluid">
            {/* Services card dynamically */}
            <div className="text-start container " >
                <Col>
                    <Card className=" hvr-float-shadow hvr-grow-shadow   mb-5  h-100 ">
                        <Card.Img variant="top cardsimg" src={img} />
                        <Card.Body className="" >
                            <Card.Title className="text-center fw-bold">{name}</Card.Title>
                            <Card.Text>
                                <h2>
                                    Price: $ {price}
                                </h2>
                                <h5>
                                    About Service: <small className="pb-3 fs-6 text-start"> {description}</small>
                                </h5>


                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-center" >
                            <Link to={`/booking/${_id}`}>
                                <button className="btn btn-outline-danger px-5 border-2 rounded-4 fw-bold fst-italic">Book Now</button>
                            </Link>
                        </Card.Footer>
                    </Card>
                </Col>
            </div>
        </div>
    );
};

export default ServiceCard;