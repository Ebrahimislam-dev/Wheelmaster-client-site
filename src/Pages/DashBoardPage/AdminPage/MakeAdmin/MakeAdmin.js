
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleMakeAdmin = e => {
        const user = { email };
        fetch(`https://salty-river-79195.herokuapp.com/users/admin`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {

                    console.log(data);
                    setEmail('');
                    setSuccess(true);
                }

            })
        e.preventDefault();
    }
    return (
        <div>
            <h2 className="text-white text-3xl mb-20">Make An Admin from Users</h2>
            <form onSubmit={handleMakeAdmin}>
                <input

                    type="email"
                    placeholder="Input a Valid Email"
                    className="w-6/12 my-2 py-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-600   focus:border-transparent"
                    onBlur={handleOnBlur}

                />
                <br />
                <button type="submit" className="w-4/12 py-1 rounded-xl bg-yellow-500 text-black font-bold text-xl mb-3" >Make Admin</button>
            </form>
            {
                success && <Alert severity="success">Create A Admin Successfully!</Alert>

            }
        </div>
    );
};

export default MakeAdmin;