import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
// import useAuth from './../../../hooks/useAuth';
import { Alert } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import useValue from '../../../hooks/useValue';

const Register = () => {
    // const { user, registerUser, isLoading, authError } = useAuth()
    const { user, registerUser, isLoading, authError } = useValue()
    const [logindata, setLogindata] = useState({})
    const history = useHistory();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...logindata };
        newLoginData[field] = value;
        // console.log(newLoginData, field, value);
        setLogindata(newLoginData);

    }
    const handleLoginSubmit = e => {
        if (logindata.password !== logindata.password2) {
            alert('your password didnt match')
            return;
        }
        registerUser(logindata.email, logindata.password, logindata.name, history)
        e.preventDefault();
    }
    return (
        <div className="loginbanner">
            <div className="md:h-screen h-full md:px-28">
                <div className="grid grid-cols-1 md:grid-cols-2" >
                    <div className="mt-48">
                        <h1 className="text-4xl uppercase font-mono text-yellow-50"><span className="text-red-600"> Please</span> Register Here</h1>
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <input
                                required
                                type="text"
                                className="w-8/12 my-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                placeholder="Your Name"
                                name="name"
                                onBlur={handleOnBlur}
                            />
                            <input
                                required
                                type="email"
                                className="w-8/12 my-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                placeholder="Your  Email"
                                name="email"
                                onBlur={handleOnBlur}
                            />
                            <input
                                required
                                className="w-8/12 my-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                placeholder="Your password"
                            />
                            <input
                                required
                                className="w-8/12 my-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                placeholder="Re-type your password"
                            />
                            <br />

                            <button className="w-4/12 py-2 rounded-xl bg-yellow-500 text-black font-bold text-xl mb-3" type="submit">Register</button>
                            <br />
                            <NavLink style={{ textDecoration: 'none', }} to="login">
                                <button className="text-white text-xl animate-pulse"> Already Register? Please login</button>
                            </NavLink>

                        </form>}
                        {
                            isLoading && <Button variant="primary" disabled>
                                <Spinner
                                    as="span"
                                    animation="grow"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                Loading...
                            </Button>
                        }
                        {
                            user?.email && <Alert severity="success">Congrets you Created a Account Successfully!</Alert>

                        }
                        {
                            authError && <Alert severity="error">{authError}</Alert>
                        }
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Register;