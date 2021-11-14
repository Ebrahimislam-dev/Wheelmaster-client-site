
import React from 'react';
import { Redirect, Route } from 'react-router';
// import useAuth from '../../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';
import useValue from '../../../hooks/useValue';

const AdminRoute = ({ children, ...rest }) => {
    // const { user, admin, isLoading } = useAuth();
     const { user, admin, isLoading } = useValue();
    if (isLoading) { return  <Spinner animation="border" variant="danger" /> }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;