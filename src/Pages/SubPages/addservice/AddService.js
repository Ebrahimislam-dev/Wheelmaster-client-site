import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddServices.css'
const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://frozen-refuge-45390.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added succesfully');
                    reset();
                }

            })

    }
    return (
        <div className="add-services">
           
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Service Name"  className="fs-4 rounded"  />
                <textarea {...register("description")} placeholder="Write about Your Service" className="fs-5 w-75 rounded"  />
                <input type="number" {...register("price")} placeholder="Service Price"  className="fs-4 rounded" />
                <input {...register("img")} placeholder="image Url" className="fs-4 rounded" />
                <input type="submit" className="submit bg-danger text-white fs-4 rounded-pill" />
            </form>
        </div>
    );
};

export default AddService;