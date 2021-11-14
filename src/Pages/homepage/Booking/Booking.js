import React from 'react';
import axios from 'axios';
import { Card, Col, Row, Spinner, Button } from "react-bootstrap";
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

import "./Booking.css"
// import useAuth from '../../../hooks/useAuth';
import useProducthook from './../../../hooks/useProducthook';
import useValue from '../../../hooks/useValue';






const Booking = () => {
    const { productId } = useParams();
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState('');
    // console.log(error);
    // const [details, setDetails] = useState([]);
    // const { user } = useAuth();
    const { user } = useValue();


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // useEffect(() => {
    //     setIsLoading(true);
    //     fetch('http://localhost:5000/products')
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data);
    //             setDetails(data)
    //             setIsLoading(false);
    //         })
    //         .catch(error => {
    //             setError(error.message);

    //         })
    // }, [setDetails, setIsLoading]);

    const [products, isLoading] = useProducthook(false);
    //filter 
    const singleService = products.filter(product => product._id === productId);

    const onSubmit = (data) => {
        data.email = user?.email;
        axios.post('http://localhost:5000/order', data)
            .then(res => {
                if (res.data.insertedId) {

                    alert('Ordered succesfully, Go to My Order for Checking Order');
                    reset();
                }
            });

    };
    return (

        <div className="bg-black">
            <h1 className="heading mb-5 mt-1 text-white"> Book
                <span className="text-danger"> {singleService[0]?.name} </span> Cycle
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
                    <div className="container-fluid mb-1">
                        <div className="row ">
                            {/* singl service details */}
                            <div className="col-md-5 ">
                                <Row xs={1} md={1} className="g-3 ">
                                    <div className="container-fluid">

                                        <div className="container " >
                                            <Col>
                                                <Card className=" bg-black mb-5">
                                                    <Card.Img variant="top" src={singleService[0]?.img} />
                                                    {/* <Card.Body>
                                                        <Card.Title>{singleService[0]?.name}</Card.Title>
                                                        <Card.Text>
                                                            <h5>
                                                                About Service: <small className="pb-3 fs-6 text-start"> {singleService[0]?.description}</small>
                                                            </h5>

                                                        </Card.Text>
                                                    </Card.Body>
                                                    <Card.Footer>
                                                       

                                                    </Card.Footer> */}
                                                </Card>
                                            </Col>
                                        </div>
                                    </div>
                                </Row>
                            </div>

                            {/* Booking Form  */}
                            <div className="col-md-7">
                                <div className=" order-services  m-auto">
                                    <div className=" border d-flex justify-content-center align-items-center">
                                        <div>
                                            <h1 className="text-2xl text-white">Please Fill The Order Form</h1>
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                {singleService[0] && <input
                                                    {...register("name", { required: true })}
                                                    placeholder="Service Name"
                                                    defaultValue={singleService[0]?.name}
                                                    className="w-8/12 my-2 mt-2 p-1  border border-transparent focus:outline-none focus:ring-2 focus:ring-red-600   focus:border-transparent"
                                                />
                                                }


                                                <input
                                                    {...register("displayName", { required: true })}
                                                    placeholder="Name"
                                                    defaultValue={user.displayName}
                                                    className="w-8/12 my-2 mt-2 p-1 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-600   focus:border-transparent"
                                                />


                                                <input
                                                    {...register("email", { required: true })}
                                                    placeholder="Email"
                                                    defaultValue={user.email}
                                                    className="w-8/12 my-2 mt-2 p-1 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-600   focus:border-transparent"
                                                />

                                                <input
                                                    {...register("date", { required: true })}
                                                    placeholder="Date"
                                                    defaultValue={new Date()}
                                                    className="w-8/12 my-2 mt-2 p-1 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-600   focus:border-transparent"
                                                />

                                                <input
                                                    {...register("address", { required: true })}
                                                    placeholder="Address"
                                                    className="w-8/12 my-2 mt-2 p-1 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-600   focus:border-transparent"
                                                />

                                                <input
                                                    type="number"
                                                    {...register("phoneNo", { required: true })}
                                                    placeholder="Phone No"

                                                    className="w-8/12 my-2 mt-2 p-1 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-600   focus:border-transparent"
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
                            <Link to="/home">
                                <button className="w-2/12 py-2  rounded-xl bg-yellow-500 text-black font-bold text-xl mb-3">Backto Home</button>
                            </Link>
                            <Link to="/exploreProducts">
                                <button className="w-2/12 py-2  rounded-xl bg-yellow-500 text-black font-bold text-xl mb-3">Book Another Service</button>
                            </Link>

                        </div>

                    </div>
                )
            }
        </div>



    );
};

export default Booking;