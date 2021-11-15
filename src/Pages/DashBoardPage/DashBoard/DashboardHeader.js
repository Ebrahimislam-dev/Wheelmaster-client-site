import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useValue from '../../../hooks/useValue';


const DashboardHeader = () => {

    const { user, logOut } = useValue();
 

    return (
        <div>
            <nav className=" md:w-screen md:flex justify-around items-center w-full py-4 bg-gray-900 shadow-lg z-10 ">
                <div className="   ">
                    <NavLink to="/home" className=" text-2xl font-bold no-underline flex md:justify-start justify-center items-center" >
                        <img src="https://i.ibb.co/rFJsMZv/main-logo.png" alt="" className="w-10" />
                        <span className=" text-white font-mono mt-2" >Wheelmaster</span>
                    </NavLink>


                </div>
                <div className="flex md:flex-row flex-col-reverse ">

                    <NavLink to="/dashboard" ><span className="font-bold uppercase md:mr-20 mr-0 no-underline group  text-white  hover:text-red-700"><span className="md:mr-6">{user.displayName}'s </span> DASH_BOARD</span></NavLink>

                  
                    <section className="flex items-center justify-center mt-0 sm:mt-5 md:ml-14 ">
                        {user.email ? <div >
                            <button onClick={logOut} className=" text-sm no-underline text-black uppercase font-bold   bg-yellow-400 px-6  rounded-full md:rounded-none py-2 mr-5 tracking-widest">

                                <span className="text-xs">Logout</span>
                            </button>
                        </div>
                            :
                            <div className="flex items-center">

                                <NavLink to="/login" className=" text-sm no-underline text-black uppercase font-bold   bg-yellow-400 px-6 py-2 tracking-widest mt-2 md:mt-0">
                                    Login
                                </NavLink>

                            </div>}

                        {user.email && <div>

                            <NavLink to="/home" className=" text-2xl text-black">
                                <div className="flex items-center">
                                    <img src={user.photoURL} alt="" className="rounded-full border-2 border-yellow-400 w-12 h-12 mr-1" />
                                    <span className="font-semibold text-xs text-white">{user.displayName}</span>
                                </div>
                            </NavLink>
                        </div>
                        }
                    </section>
                </div>
            </nav>
        </div>
    );
};

export default DashboardHeader;