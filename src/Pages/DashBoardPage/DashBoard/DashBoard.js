import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';

import ManageProducts from '../AdminPage/ManageProducts/ManageProducts';
import Myorder from './../UsersPage/Myorder/Myorder';
import AddReview from './../UsersPage/AddReview/AddReview';
import Payment from './../UsersPage/PaymentMethod/Payment';
import MakeAdmin from '../AdminPage/MakeAdmin/MakeAdmin';
// import ManageAllOrder from '../AdminPage/ManageAllOrder/ManageAllOrder';
import AddProducts from '../AdminPage/AddProduct/AddProducts';
import useValue from '../../../hooks/useValue';
import './DashBoard.css'
import { Link } from 'react-router-dom';
import ManageOrders from '../AdminPage/ManageAllOrder/ManageOrders';
import DashboardHome from './DashboardHome';
import DashboardHeader from './DashboardHeader';





const DashBoard = () => {
    const { isLoading, admin, logOut } = useValue();
    const [control, setControl] = useState("dashboardhome");
    return (
        <>

            {
                isLoading ? <div className="text-center">
                    <Spinner animation="border" variant="success" className=""
                    />
                </div>

                    : <div >
                        <div>
                            <DashboardHeader></DashboardHeader>
                        </div>
                        <div className=" grid md:grid-cols-4 dashboardbg  ">
                            <div className=" bg-gray-900 md:h-screen py-10 flex justify-center ">
                                <div className="flex flex-col   ">
                                    <button className=" text-yellow-500 uppercase font-bold mb-4" onClick={() => setControl("dashboardhome")}>Welcome</button>
                                    <Link to="/home"><button className=" text-yellow-500  uppercase font-bold mb-4"> Home</button></Link>

                                    {admin ? <div>

                                        <button className=" text-yellow-500 uppercase font-bold mb-4" onClick={() => setControl("manageAllOrders")}>Manage All Orders</button>
                                        <br /> <button className=" text-yellow-500  uppercase font-bold mb-4" onClick={() => setControl("addProducts")}>Add A New Product</button>
                                        <br />  <button className=" text-yellow-500  uppercase font-bold mb-4" onClick={() => setControl("manageProducts")}>Manage Products</button>
                                        <br /> <button className=" text-yellow-500  uppercase font-bold mb-4" onClick={() => setControl("makeAdmin")}>Make A New Admin</button>

                                    </div>
                                        :
                                        <div>
                                            <button className=" text-yellow-500  uppercase font-bold mb-4" onClick={() => setControl("myOrder")}>My Orders</button>
                                            <br /> <button className=" text-yellow-500  uppercase font-bold mb-4" onClick={() => setControl("addReview")}>Review Us</button>

                                            <br /> <button className=" text-yellow-500  uppercase font-bold mb-4" onClick={() => setControl("paymentMethod")}>Make Payment</button>

                                        </div>}

                                    <Link to="/home"><button onClick={logOut} className=" text-yellow-500  uppercase font-bold mb-4"> Log Out</button></Link>

                                </div>
                            </div>
                            <div className=" md:col-span-3">
                                {/* {control === "manageAllOrders" && <ManageAllOrder />} */}
                                {control === "manageAllOrders" && <ManageOrders />}
                                {control === "addProducts" && <AddProducts />}
                                {control === "manageProducts" && <ManageProducts />}
                                {control === "makeAdmin" && <MakeAdmin />}


                                {control === "dashboardhome" && <DashboardHome />}



                                {control === "myOrder" && <Myorder />}
                                {control === "addReview" && <AddReview />}
                                {control === "paymentMethod" && <Payment />}


                            </div>
                        </div>
                    </div>

            }
        </>
    );
};

export default DashBoard;

/*
    let { path, url } = useRouteMatch();
    const { user, admin } = useAuth();

<Link to={`${url}`}><button color="inherit">DashBoard</button></Link>
<br />
<Link to="myOrder"><button color="inherit">MyOrder</button></Link>




{admin && <div>
    <Link to={`${url}/makeAdmin`}><button color="inherit">Make Admin</button></Link>
    <br />
    <Link to={`${url}/addProduct`}><button color="inherit">Add doctor</button></Link>

</div>
}


<Switch>
                                <Route exact path={path}>
                                    <DashBoard></DashBoard>
                                </Route>
                                <Route exact path={`${path}/myOrder`}>
                                    <Myorder></Myorder>
                                </Route>
                                <AdminRoute path={`${path}/makeAdmin`}>
                                    <MakeAdmin></MakeAdmin>
                                </AdminRoute>
                                <AdminRoute path={`${path}/addProduct`}>
                                    <AddProducts></AddProducts>
                                </AdminRoute>
                            </Switch> */