import React from 'react';
import { useState, useEffect } from "react";
import { Spinner, Table } from "react-bootstrap";
// import { useForm } from "react-hook-form";

const ManageAllOrder = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    console.log(error);

    // const {
    //     register,
    //     handleSubmit,

    //     formState: { errors },
    // } = useForm();
    // loading data from database 
    useEffect(() => {
        setIsLoading(true);
        fetch('https://frozen-refuge-45390.herokuapp.com/allorder')
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
        const url = `https://frozen-refuge-45390.herokuapp.com/allorder/${id}`;
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

    // //update
    // const handleStatusChange = e => {
    //     const updateStatus = e.target.value;
    //     const updateUser = { ...orders };
    //     updateUser.status = updateStatus;
    //     setOrders(updateUser)
    // }

    const handleUpdateOrder = id => {
        const url = `https://frozen-refuge-45390.herokuapp.com/allorder/${id}`;
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
                        <Table responsive="sm" striped bordered hover>
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
                                <tbody>
                                    <tr>
                                        <td >{index}</td>

                                        <td >{order?.name}</td>
                                        <td>{order?.displayName}</td>
                                        <td>{order?.email}</td>
                                        <td>{order?.status}</td>
                                        <td>{order?.address}</td>
                                        <td>{order?.phoneNo}</td>
                                        <td>{order?.date}</td>
                                        <button className="btn-outline-danger mt-1 mb-3 fw-bold px-3" onClick={() => handleDelete(order._id)} >Delete</button>
                                        <button className="btn-outline-success p-2 mb-1 fw-bold" onClick={() => handleUpdateOrder(order._id)}>Approved</button>


                                        {/* <form onSubmit={handleSubmit(onSubmit)}>

                                            <input
                                                type="hidden" onChange={handleStatusChange}
                                                {...register("status", { required: true })}
                                                defaultValue="Booked"


                                            />


                                            {errors.exampleRequired && <span>This field is required</span>}
                                            <input type="submit" value="Confirm Order" className="btn btn-danger fs-5 fw-bold submit" />
                                        </form> */}
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