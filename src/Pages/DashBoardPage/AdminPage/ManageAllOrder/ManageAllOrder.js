import React from 'react';
import { useState, useEffect } from "react";
import { Spinner, Table } from "react-bootstrap";
// import { useForm } from "react-hook-form";

const ManageAllOrder = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    console.log(error);

    // loading data from database 
    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:5000/allorder')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);

            })
    }, [setOrders, setIsLoading]);

    const handleDelete = id => {
        const url = `http://localhost:5000/allorder/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('This item is deleted')


                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                    console.log(error);

                }

            })
    }


    const handleUpdateOrder = id => {
        const url = `http://localhost:5000/allorder/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('updated succesfully')
                    setOrders({})
                }
            })
    }

    return (
        <div>
            {
                isLoading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                ) : (
                    <div className="container-fluid  mb-1">
                        <Table responsive="sm" className="text-white" striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Order Name</th>
                                    <th>Customer Name</th>
                                    <th>Customer Email</th>
                                    <th>Order status</th>
                                    <th>Customer Address</th>
                                    <th>Customer Phone Number</th>
                                    <th>Order Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {orders?.map((order, index) => (
                                <tbody >
                                    <tr >
                                        <td className="text-white" >{index}</td>

                                        <td className="text-white" >{order?.name}</td>
                                        <td className="text-white" >{order?.displayName}</td>
                                        <td className="text-white" >{order?.email}</td>
                                        <td className="text-white" >{order?.status}</td>
                                        <td className="text-white" >{order?.address}</td>
                                        <td className="text-white" >{order?.phoneNo}</td>
                                        <td className="text-white" >{order?.date}</td>
                                        <button className="btn-outline-danger mt-1 mb-3 fw-bold px-3 text-white" onClick={() => handleDelete(order._id)} >Delete</button>
                                        <button className="btn-outline-success p-2 mb-1 fw-bold text-white" onClick={() => handleUpdateOrder(order._id)}>Approved</button>



                                    </tr>
                                </tbody>
                            ))}
                        </Table>

                    </div>
                )
            }
        </div>
    );
};

export default ManageAllOrder;