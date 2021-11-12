import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Row, Spinner, Button } from "react-bootstrap";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from "./../../../hooks/useAuth";
import "./Booking.css"





const Booking = () => {
    const { servicesId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    console.log(error);
    const [details, setDetails] = useState([]);


    const { user } = useAuth();


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        setIsLoading(true);
        fetch('https://frozen-refuge-45390.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setDetails(data)
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);

            })
    }, [setDetails, setIsLoading]);
    //filter 
    const singleService = details.filter(service => service._id === servicesId);

    const onSubmit = (data) => {
        data.email = user?.email;
        axios.post('https://frozen-refuge-45390.herokuapp.com/order', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Ordered succesfully, Go to My Order for Checking Order');
                    reset();
                }

            })
    };
    return (

        <div>
            <h1 className="heading mb-5 mt-1">
                <span className="text-danger"> {singleService[0]?.name} </span>
            </h1>
            {
                isLoading ? (
                    <Button variant="danger" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </Button>


                ) : (
                    <div className="container-fluid  mb-1">
                        <div className="row">
                            {/* singl service details */}
                            <div className="col-md-5">
                                <Row xs={1} md={1} className="g-3 ">
                                    <div className="container-fluid">

                                        <div className="container" >
                                            <Col>
                                                <Card className=" mb-5">
                                                    <Card.Img variant="top" src={singleService[0]?.img} />
                                                    <Card.Body>
                                                        <Card.Title>{singleService[0]?.name}</Card.Title>
                                                        <Card.Text>
                                                            <h5>
                                                                About Service: <small className="pb-3 fs-6 text-start"> {singleService[0]?.description}</small>
                                                            </h5>

                                                        </Card.Text>
                                                    </Card.Body>
                                                    <Card.Footer>
                                                        <Link to="/home">
                                                            <button className="btn btn-outline-dark px-5 border-2 rounded-4 fw-bold fst-italic">Book Another Service</button>
                                                        </Link>

                                                    </Card.Footer>
                                                </Card>
                                            </Col>
                                        </div>
                                    </div>
                                </Row>
                            </div>

                            {/* Booking Form  */}
                            <div className="col-md-7">
                                <div className=" order-services  m-auto">
                                    <div className=" border border d-flex justify-content-center align-items-center">
                                        <div>
                                            <h1 className="fst-italic">Please Fill The Order Form</h1>
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                {singleService[0] && <input
                                                    {...register("name", { required: true })}
                                                    placeholder="Service Name"
                                                    defaultValue={singleService[0]?.name}
                                                    className="p-1 mt-2"
                                                />
                                                }


                                                <input
                                                    {...register("displayName", { required: true })}
                                                    placeholder="Name"
                                                    defaultValue={user.displayName}
                                                    className="p-1 mt-2"
                                                />


                                                <input
                                                    {...register("email", { required: true })}
                                                    placeholder="Email"
                                                    defaultValue={user.email}
                                                    className="p-1 mt-2"
                                                />

                                                <input
                                                    {...register("date", { required: true })}
                                                    placeholder="Date"
                                                    defaultValue={new Date()}
                                                    className="p-1 mt-2"
                                                />

                                                <input
                                                    {...register("address", { required: true })}
                                                    placeholder="Address"
                                                    className="p-1 mt-2"
                                                />

                                                <input
                                                    type="number"
                                                    {...register("phoneNo", { required: true })}
                                                    placeholder="Phone No"
                                                    className="p-1  mt-2"
                                                />
                                                <input
                                                    type="hidden"
                                                    {...register("status", { required: true })}
                                                    defaultValue="Pending"


                                                />

                                                {errors.exampleRequired && <span>This field is required</span>}

                                                <input type="submit" value="Confirm Order" className="btn btn-danger fs-5 fw-bold submit" />
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            }
        </div>



    );
};

export default Booking;