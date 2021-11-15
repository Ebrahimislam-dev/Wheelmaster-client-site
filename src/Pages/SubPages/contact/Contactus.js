import React from 'react';
import Header from '../Header/Header';
import "./Contact.css"
const Contactus = () => {
    return (
        <div className="container-fluid bg-black">
            <div className="pb-28">
                <Header></Header>
            </div>
            {/* Contact use 1st Section */}
            <div className="container text-gray-200 pb-10">
                <div className="row container">
                    <h1 className="heading mb-5 mt-2">
                        CONTACT  <span className="text-danger ms-3">US</span>
                    </h1>

                    <div className="col-md-5 text-start ms-3 pb-3">
                        <h5 className="text-uppercase">
                            wheel master
                        </h5>
                        <p>
                            Jubli Road, Chittagong-4318, Bangladesh <br />
                            IP Tel.: +8809613230505 <br />

                            Tel.: +88-03042-51153,+88-03042-51155,+88-03042-51156<br />
                            Fax.: 03042 51160 <br />
                            Email: info@wheelmaster.com
                        </p>
                    </div>
                    <div className="col-md-5 text-start ms-3">
                        <h5>
                            For Cycle Related Query
                        </h5>
                        <p>
                            Tel.: +88-03042-51154-61, Ext. 317, 390 <br />
                            Mobile No.: 01720478621, 01844072000 <br />
                            Mobile Numbers remain open during office hour (08.30 AM to 04.00 PM) <br />

                            Email Address: info@wheelmaster.com <br />
                        </p>
                    </div>
                    <div className="col-md-5 text-start ms-3 pb-3">
                        <h5>
                            For Services Related Query
                        </h5>
                        <p>
                            Tel.: +88-03042-51154-61, Ext. 385 <br />
                            Mobile : +8809613230513 <br />
                            Email Address: info@wheelmaster.com
                        </p>
                    </div>
                    <div className="col-md-5 text-start ms-3">
                        <h5>
                            For Support
                        </h5>
                        <p>
                            Tel.: +88-03042-51154-61, Ext. 384, 3060 <br />
                            Mobile: 01832223310 <br />
                            Email Address: info@wheelmaster.com
                        </p>
                    </div>



                </div>
            </div>
            {/* Contactus 2nd section */}
            <div>
                <div className="contact-bg text-gray-200 fw-bold p-5  rounded">
                    <h1 className="text-center m-3 fs-1 fst-italic">Conatct Us Via Mail</h1>
                    <form>
                        <div className="row mb-3">
                            <label
                                htmlFor="inputName"
                                className=" fs-5 col-sm-2 col-form-label col-form-label-sm "
                            >
                                Name
                            </label>
                            <div className="col-sm-8">
                                <input
                                    type="name"
                                    className=" form-control form-control-sm "
                                    id="inputName"
                                    placeholder="Enter your name"
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label
                                htmlFor="colFormLabelSm"
                                className=" fs-5 col-sm-2 col-form-label col-form-label-sm"
                            >
                                Email
                            </label>
                            <div className="col-sm-8">
                                <input
                                    type="email"
                                    className="form-control form-control-sm "
                                    id="colFormLabelSm"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label
                                htmlFor="colFormLabelSm"
                                className=" fs-5 col-sm-2 col-form-label col-form-label-sm"
                            >
                                Description
                            </label>
                            <div className="col-sm-8 ">
                                <input
                                    type="text"
                                    className="form-control form-control-sm "
                                    id="colFormLabelSm"
                                    placeholder="Describe Your Query few words "
                                />
                            </div>
                        </div>

                    </form>

                    <button className="btn btn-danger fw-bold fs-5 px-5 py-2">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Contactus;