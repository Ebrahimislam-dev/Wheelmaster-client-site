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
    //     fetch('https://salty-river-79195.herokuapp.com/products')
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
        axios.post('https://salty-river-79195.herokuapp.com/order', data)
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
                                            <h1 className="text-2xl text-white mt-12 font-serif">Please Fill The Order Form</h1>
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                {singleService[0] && <input
                                                    {...register("serviceName", { required: true })}
                                                    placeholder="Service Name"
                                                    defaultValue={singleService[0]?.name}
                                                    className="w-8/12 my-2 mt-2 p-1  border border-transparent focus:outline-none focus:ring-2 focus:ring-red-600   focus:border-transparent"
                                                />}
                                                {singleService[0] && <input
                                                    {...register("img", { required: true })}
                                                    type="hidden"

                                                    defaultValue={singleService[0]?.img}
                                                    className="w-8/12 my-2 mt-2 p-1  border border-transparent focus:outline-none focus:ring-2 focus:ring-red-600   focus:border-transparent"
                                                />
                                                }
                                                {singleService[0] && <input
                                                    {...register("price", { required: true })}
                                                    type="hidden"

                                                    defaultValue={singleService[0]?.price}
                                                    className="w-8/12 my-2 mt-2 p-1  border border-transparent focus:outline-none focus:ring-2 focus:ring-red-600   focus:border-transparent"
                                                />
                                                }


                                                <input
                                                    {...register("displayName", { required: true })}
                                                    placeholder="Name"
                                                    defaultValue={user.displayName}
                                                    className="w-8/12 my-2 mt-4 p-1 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-600   focus:border-transparent"
                                                />


                                                <input
                                                    {...register("email", { required: true })}
                                                    placeholder="Email"
                                                    defaultValue={user.email}
                                                    className="w-8/12 my-2 mt-4 p-1 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-600   focus:border-transparent"
                                                />

                                                <input
                                                    {...register("date", { required: true })}
                                                    placeholder="Date"
                                                    defaultValue={new Date()}
                                                    className="w-8/12 my-2 mt-4 p-1 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-600   focus:border-transparent"
                                                />

                                                <input
                                                    {...register("address", { required: true })}
                                                    placeholder="Address"
                                                    className="w-8/12 my-2 mt-4 p-1 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-600   focus:border-transparent"
                                                />

                                                <input
                                                    type="number"
                                                    {...register("phoneNo", { required: true })}
                                                    placeholder="Phone No"

                                                    className="w-8/12 my-2 mt-4 p-1 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-600   focus:border-transparent"
                                                />
                                                {/* <input
                                                    type="hidden"
                                                    {...register("status", { required: true })}
                                                    defaultValue="Pending"


                                                /> */}

                                                {errors.exampleRequired && <span>This field is required</span>}

                                                <input type="submit" value="Place Order" className=" rounded-xl bg-yellow-500 text-black font-bold md:text-xl mt-3  submit" />
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                )

            }
            <Link to="/home">
                <button className="md:w-2/12 py-2 md:px-0 px-8 md:mt-0  mt-4 rounded-xl bg-yellow-500 text-black font-bold text-xs md:text-xl mb-3">Backto Home</button>
            </Link>
            <br />
            <Link to="/exploreProducts">
                <button className="md:w-2/12 py-2 md:px-0 px-8 md:mt-0  mt-2 rounded-xl bg-yellow-500 text-black font-bold text-xs md:text-xl mb-3">Book Another Service</button>
            </Link>
        </div>



    );
};

export default Booking;