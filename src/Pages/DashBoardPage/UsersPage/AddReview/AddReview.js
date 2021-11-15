import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddReview.css'
import { Spinner } from 'react-bootstrap';
import useValue from '../../../../hooks/useValue';
const AddReview = () => {
    const { isLoading, user } = useValue();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://salty-river-79195.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added succesfully');
                    reset();
                }

            })

    }
    return (
        <>
            {
                isLoading ? <div className="text-center">
                    <Spinner animation="border" variant="success" className=""
                    />
                </div> : <div className="add-review md:h-screen h-full md:px-28">
                    <div className="grid grid-cols-2">
                        <form onSubmit={handleSubmit(onSubmit)} className="">
                            <input {...register("displayName", { required: true })} placeholder="Your Name" defaultValue={user.displayName} className="fs-6 rounded" />
                            <input {...register("profession", { required: true })} placeholder="Your profession" className="fs-6 rounded" />
                            <textarea {...register("description")} placeholder="Write  Your Review About us" className="fs-5 w-75 rounded" />
                            <input {...register("rating", { required: true, maxLength: 6 })} placeholder="Rating (1-5)" className="fs-6 rounded" />
                            <input {...register("img")} placeholder="your image url" defaultValue={user.photoURL} className="fs-6 rounded" />
                            <input type="submit" className="submit bg-danger text-white fs-6 rounded-pill" />
                        </form>
                    </div>

                </div>
            }


        </>



    );
};

export default AddReview;