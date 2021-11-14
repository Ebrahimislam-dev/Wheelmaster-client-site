import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
// import useAuth from './../../../hooks/useAuth';
import { Alert, Button } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';

import './Loginmain.css'
import useValue from '../../../hooks/useValue';

const Loginmain = () => {
    // const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth()
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useValue()
    const [logindata, setLogindata] = useState({})
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // // console.log(field, value);
        const newLoginData = { ...logindata };
        newLoginData[field] = value;
        setLogindata(newLoginData);
    }
    const handleLoginSubmit = e => {

        loginUser(logindata.email, logindata.password, location, history)
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <div className="loginbanner ">
            <div className=" md:h-screen h-full md:px-28" >


                <div className="grid grid-cols-1 md:grid-cols-2">

                    <div className="mt-48 ">
                        <h1 className="text-4xl uppercase font-mono text-yellow-50"><span className="text-red-600"> Please</span> Login</h1>
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <input
                                required
                                type="email"
                                className="w-8/12 my-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                placeholder="Your  Email"
                                name="email"
                                onBlur={handleOnChange}

                            />
                            <br />
                            <input
                                required
                                placeholder="Your Password"

                                className="w-8/12 my-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-600   focus:border-transparent"
                                type="password"
                                name="password"
                                onBlur={handleOnChange}

                            />
                            <br />
                            <button className="w-4/12 py-2 rounded-xl bg-yellow-500 text-black font-bold text-xl mb-3" type="submit">Login</button>
                            <br />

                            <NavLink to="/register">
                                <h1 className="text-white text-xl animate-pulse"> New User? Please Register</h1>
                            </NavLink>


                        </form>}


                        <p className=" text-gray-100 mt-3"> Or Sign In Useing </p>
                        <br />

                        <button onClick={handleGoogleSignIn} className="w-4/12 py-2  rounded-xl bg-yellow-500 text-black font-bold text-xl mb-3" type="submit">Google </button>

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
                            user?.email && <Alert severity="success">Login Successfully!</Alert>

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

export default Loginmain;
