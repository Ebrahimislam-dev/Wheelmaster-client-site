import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Footer.css"
import { Link } from "react-router-dom";
import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutube,

} from "@fortawesome/free-brands-svg-icons";
import {

    
    faMapMarkedAlt
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div>
            <div className="container-fluid footer-bg text-white-50 md:h-screen h-full md:px-28">
                {/* <p className="heading-footer footer-menu  fst-italic">
                    " The world is a book and those who do not travel get to read only one page! "
                </p> */}

                <div className="container-fluid">

                    <div className=" row">
                        {/* About colum */}

                        <div className="col-md-2 mt-5">
                            <div className="footer-menu-container">
                                <ul>
                                    <h3 className="">
                                        Working_Hours
                                    </h3>
                                    <li className="footer-menu flex md:justify-around justify-center">
                                        <div className="mr-3">
                                            <i class="fas fa-calendar-day"></i>
                                        </div>
                                        <div>
                                            Saturday: 9am - 7pm
                                        </div>
                                    </li>
                                    <li className="footer-menu flex md:justify-around justify-center">
                                        <div className="mr-3">
                                            <i class="fas fa-calendar-day"></i>
                                        </div>
                                        <div>
                                            Sunday: 9am - 8pm
                                        </div>
                                    </li>
                                    <li className="footer-menu flex md:justify-around justify-center">
                                        <div className="mr-3">
                                            <i class="fas fa-calendar-day"></i>
                                        </div>
                                        <div>
                                            Mon - Fri: 8am - 8pm
                                        </div>
                                    </li>





                                </ul>
                            </div>
                        </div>
                        {/* Router/Nav column */}
                        <div className="col-md-2 mt-5">


                            <div className="footer-menu-container">
                                <ul>
                                    <h4 >
                                        Quick Links

                                    </h4>
                                    <li className="footer-menu">
                                        <Link to="/home" className="footer-menu text-decoration-none">
                                            Home
                                        </Link>
                                    </li>


                                    <li className="footer-menu">
                                        <Link to="/about" className="footer-menu text-decoration-none">
                                            About us
                                        </Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link to="/contact" className="footer-menu text-decoration-none">
                                            Contact us
                                        </Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link to="/faqs" className="footer-menu text-decoration-none">
                                            FAQ's
                                        </Link>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">

                            <div className="mt-5 text-start">
                                <h3 className="fst-italic fs-2  text-white flex">Wheel <span className="ml-4" ><img className=" w-8/12" src="https://i.ibb.co/rFJsMZv/main-logo.png" alt="" /></span>Master </h3>
                                <p>Our company provides goods of premium quality and at

                                    fair prices. We are sure that these options are the secret

                                    of success.</p>
                                <div className="d-flex  text-center ">
                                    <div className=" me-3 animate-pulse">
                                        <Link to="/contact" className="footer-menu fs-3">
                                            <FontAwesomeIcon icon={faGoogle} />
                                        </Link>

                                    </div>
                                    <div className="me-3 fs-3 animate-pulse">
                                        <Link to="/contact" className="footer-menu fs-3">
                                            <FontAwesomeIcon icon={faFacebookSquare} />
                                        </Link>

                                    </div>
                                    <div className=" me-3 fs-3 animate-pulse">
                                        <Link to="/contact" className="footer-menu fs-3">
                                            <FontAwesomeIcon icon={faInstagramSquare} />
                                        </Link>

                                    </div>

                                    <div className=" me-3 fs-3 animate-pulse">
                                        <Link to="/about" className="footer-menu  fs-3">
                                            <FontAwesomeIcon icon={faTwitterSquare} />
                                        </Link>

                                    </div>
                                    <div className=" me-3 fs-3 animate-pulse">
                                        <Link to="/about" className="footer-menu fs-3">
                                            <FontAwesomeIcon icon={faYoutube} />
                                        </Link>

                                    </div>

                                </div>



                            </div>
                        </div>

                        {/* footer Service column */}
                        <div className="col-md-2 mt-5">


                            <div className="footer-menu-container">
                                <ul>
                                    <h4 >
                                        Our Services

                                    </h4>
                                    <li className="footer-menu">
                                        <Link to="/contact" className="footer-menu text-decoration-none">
                                            24/7 Support
                                        </Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link to="/contact" className="footer-menu text-decoration-none">
                                            Experienced Guides
                                        </Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link to="/contact" className="footer-menu text-decoration-none">
                                            Personal Guides
                                        </Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link to="/contact" className="footer-menu text-decoration-none">
                                            Secure TourPlan
                                        </Link>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        {/* Contact column */}
                        <div className="col-md-3">
                            <div className="mt-5">
                                <h3>Contact Us</h3>
                                <br />
                                <input
                                    className=" bg-light py-1 px-5 border-danger text-start "
                                    type="text"
                                    placeholder="Enter your Email"
                                />
                                <br />
                                <button className="btn btn-danger px-4 fw-bold mt-1">Submit</button>

                                <div className="footer-menu mt-3 d-flex justify-content-center align-items-center ">
                                    <div>
                                        <i className="fas fa-headset"></i>
                                    </div>
                                    <div>
                                        Hotline: +8801938-881110
                                    </div>
                                </div>



                                <div className="mt-3 footer-menu">
                                    <i className="fas fa-info-circle me-1"></i>
                                    Support: support@wheelmasterservicebd.com
                                </div>
                                <div className="mt-3 footer-menu">
                                    <p>

                                        <FontAwesomeIcon icon={faMapMarkedAlt} />

                                        119, K.B. Fazlul Kader Road, Chittagong
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="mt-5 mb-5 mr-10">
                            <small className="  text-xl">WheelMaster © All rights reserved.</small>
                            <br />
                            <small className=" animate-pulse text-md">Developed by Ebrahim Islam.</small>
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Footer;
