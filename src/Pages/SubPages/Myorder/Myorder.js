import React from 'react';
import { useState, useEffect } from "react";
import { Spinner, Table } from "react-bootstrap";
import useAuth from "./../../../hooks/useAuth";

const Myorder = () => {
    const { user } = useAuth();
    const [myorders, setMyOrders] = useState([]);
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    console.log(error);
    // loading data from database 
    useEffect(() => {
        setIsLoading(true);
        fetch(`https://frozen-refuge-45390.herokuapp.com/myorder/${user?.email}`)
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
        const url = `https://frozen-refuge-45390.herokuapp.com/allorder/${id}`;
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
            <h1 className="heading mt-5 mb-5">MY <span className="text-danger ">ORDERS</span></h1>
            {

                isLoading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                ) : (
                    <div className="container-fluid row  mb-1">
                        <div className="container col-md-10">
                            <Table responsive="sm" striped bordered hover>
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
                                            <td >{index}</td>
                                            <td >{order?.name}</td>
                                            <td>{order?.displayName}</td>
                                            <td>{order?.email}</td>

                                            <td>{order?.date}</td>
                                            <td>{order?.status}</td>
                                            <button className="btn-outline-danger mt-1 mb-3 fw-bold px-3" onClick={() => handleDelete(order._id)} >Cancel</button>
                                            <button className="btn-outline-success p-2 mb-1 fw-bold">Approved</button>

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