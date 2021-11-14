import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Product.css'

const ProductCard = ({ product }) => {

    // destructuring
    const { _id, name, description, price, img, rating } = product;

    return (
        <div className="container-fluid">
            {/* products card dynamically */}
            <div className="text-start container " >
                <Col>
                    <Card className=" hvr-float-shadow hvr-grow-shadow productCard bg-black text-white mb-5 px-4 h-100 ">
                        <Card.Img variant="top cardsimg" className=" px-8 py-1" src={img} />
                        <Card.Body className="" >
                            <Card.Title className="text-center fw-bold">{name}</Card.Title>
                            <Card.Text>
                                <h5>
                                    About product: <small className="pb-3 fs-6 text-start text-gray-400"> {description}</small>
                                </h5>
                                <br />

                                <h2>
                                    Price: $ {price}
                                </h2>
                                <h1 className="md:text-right mr-3">
                                    <Rating
                                        initialRating={rating}
                                        emptySymbol="far fa-star"
                                        fullSymbol="fas fa-star text-warning"
                                        readonly
                                    />
                                </h1>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-center" >
                            <Link to={`/booking/${_id}`}>
                                <button className="btn btn-outline-danger px-5 border-2 rounded-4 fw-bold fst-italic">Buy Now</button>
                            </Link>
                        </Card.Footer>
                    </Card>
                </Col>
            </div>
        </div>
    );
};

export default ProductCard;