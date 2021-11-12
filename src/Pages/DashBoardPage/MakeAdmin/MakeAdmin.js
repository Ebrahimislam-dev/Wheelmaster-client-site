import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleMakeAdmin = e => {
        const user = { email };
        fetch(`https://vast-bayou-58257.herokuapp.com/users/admin`, {
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
            <h2>make an admin</h2>
            <form onSubmit={handleMakeAdmin}>
                <TextField
                    sx={{ width:'50%'}}
                    type="email"
                    id="standard-basic"
                    label="Email"
                    onBlur={handleOnBlur}
                    variant="standard"
                />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {
                success && <Alert severity="success">Create A Admin Successfully!</Alert>

            }
        </div>
    );
};

export default MakeAdmin;