import React from 'react';
import { useState, useEffect } from "react";
import { Spinner, Table } from "react-bootstrap";
import useValue from '../../../../hooks/useValue';
// import useAuth from '../../../hooks/useAuth';


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
        fetch(`http://localhost:5000/myorder/${user?.email}`)
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
        const url = `http://localhost:5000/allorder/${id}`;
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
            <h1 className="heading mt-5 mb-5 text-white">MY <span className="text-danger ">ORDERS</span></h1>
            {

                isLoading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                ) : (
                    <div className="container-fluid row  mb-1">
                        <div className="container col-md-10">
                            <Table responsive="sm" className="text-white" striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Order Name</th>
                                        <th>Name</th>
                                        <th>Email</th>

                                        <th>Order Date</th>
                                        <th>Order Status</th>

                                        <th>Action</th>
                                    </tr>
                                </thead>

                                {myorders?.map((order, index) => (
                                    <tbody>
                                        <tr>
                                            <td className="text-white">{index}</td>
                                            <td className="text-white">{order?.name}</td>
                                            <td className="text-white">{order?.displayName}</td>
                                            <td className="text-white">{order?.email}</td>

                                            <td className="text-white">{order?.date}</td>
                                            <td className="text-white">{order?.status}</td>
                                            <button className="btn-outline-danger mt-1 mb-3 fw-bold px-3 text-white" onClick={() => handleDelete(order._id)} >Cancel</button>
                                            <button className="btn-outline-success p-2 mb-1 fw-bold text-white">Approved</button>

                                        </tr>
                                    </tbody>
                                ))}

                            </Table>
                        </div>

                    </div>
                )
            }
        </div>
    );
};

export default Myorder;