import React from 'react';
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import useValue from '../../../../hooks/useValue';
// import useAuth from '../../../hooks/useAuth';
import { MdDelete } from 'react-icons/md';

const Myorder = () => {
    // const { user } = useAuth();
    const { user } = useValue();
    const [myorders, setMyOrders] = useState([]);
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    console.log(error);
    // loading data from database 
    useEffect(() => {
        setIsLoading(true);
        fetch(`https://salty-river-79195.herokuapp.com/myorder/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);

            })
    }, [setMyOrders, setIsLoading, user.email]);

    // Delete Api
    const handleDelete = id => {
        const url = `https://salty-river-79195.herokuapp.com/allorder/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                setIsLoading(true);
                if (data.deletedCount) {
                    alert('This item is Canceled')
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                    console.log(error);
                    setIsLoading(false);

                }

            })
    };

    return (
        <div>
            {
                isLoading ? (
                    <div className="flex justify-center my-7">
                        <Spinner animation="border" variant="warning" />
                    </div>

                ) : (
                    <div>

                        <section className="flex flex-col justify-center items-center pt-24 md:mx-0 mx-4 mb-10 ">

                            <p className="font-extrabold text-gray-200 border-b-4 border-yellow-500 text-xl md:text-5xl">My Orders</p>
                        </section>
                        <section className="flex justify-center">
                            <div className="md:w-8/12 mx-10">

                                {
                                    myorders.map(order => {
                                        const { _id, serviceName, displayName, img, price, email, status } = order
                                        return (
                                            <div >
                                                <div className="  flex flex-col md:flex-row items-center justify-between mb-3 shadow-md border p-3">
                                                    <div className="flex flex-col  md:flex-row">
                                                        <div className="md:mx-0 mx-auto">
                                                            <img src={img} alt="" className=" md:w-24 md:h-24 md:mr-10 w-40" />
                                                        </div>
                                                        <div className="mt-3 mx-mt-0 md:ml-8 text-gray-200">
                                                            <h1 className="text-xl font-mono font-bold">{serviceName} </h1>
                                                            <p className="text-yellow-600 font-bold mb-2">price: {price}</p>
                                                            <p className="font-bold mb-1">Order-Status:<span className="font-normal font-mono"> {status}</span></p>

                                                        </div>

                                                    </div>
                                                    <div className="flex items-center mt-3 md:mt-0">
                                                        
                                                        <button onClick={() => handleDelete(_id)}><MdDelete className=" text-3xl text-red-500" /></button>
                                                    </div>
                                                </div>


                                            </div>

                                        )
                                    })
                                }

                            </div>
                        </section>

                    </div>
                )
            }
        </div>
    );
};

export default Myorder;