import React from 'react';

const About = () => {
    return (
        <div className="services lh-lg">

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className=" page-title py-3 ">
                            <h5 className="heading fs-1">About Our Company <span className="text-danger"> & </span>Our Guids</h5>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mt-3">
                <div className="row">
                    {/* section 1 */}
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4">
                                <img className="card-body h-100 w-100" src="https://i.ibb.co/9WwJ49F/about-1.jpg" alt="" />

                            </div>
                            <div className="col-md-7 text-start">
                                <h4 className="text-success">Travel Mama Accredited since 1999</h4>
                                <p>After guiding and working in Colorado for 10 years, Jim Ablao moved to Oregon in 1999 and immediately began guiding for First Ascent at Smith Rock State Park.  With his strong guide and climbing resume he quickly became the lead guide and manager. After a few years, along with his wife Anne and a handful of committed climbing guides, they formed Chockstone Climbing Guides, committed to a high standard of quality and professionalism. First Ascent and Chockstone Climbing Guides officially merged together in 2005, when Jim purchased First Ascent Climbing Services.  Carol Simpson, First Ascent’s founder and the first woman owned and operated guide service in the Pacific Northwest, was happy to pass on her company to someone she knew would carry on the quality programs that had been in place. Chockstone Climbing Guides has continued to offer the women’s climbing clinics offered by female guides that Simpson pioneered. Jim also began offering professional development AMGA SPI courses and exams that train and certify Single Pitch Instructors for many climbing programs throughout the Northwest US. As a person of color, Jim is involved in the BIPOC American Mountain Guide Association courses. Our Smith Rock Climbing Camps have been running for over 20 years; bringing talented committed young climbers from all over the country, these advanced level camps focus on bridging strong indoor skills to developing experience and skills for independent climbing at the crag. We expanded our camp offerings to adults in 2013.  The Smith Rock Climbing Camps are one of the only overnight camps of its kind in the US.</p>
                            </div>
                        </div>
                        {/* section 2 */}

                        <div className="row">
                            <div className="col-md-6">
                                <img className="card-body h-100 w-100 border-0 rounded-4 rounded-circle" src="https://i.ibb.co/qBmz5g7/bg2.png" alt="" />

                            </div>
                            <div className="col-md-6 text-start mt-5">
                                <h1 className="heading mt-5">Our customers are very
                                    <br />
                                    important to us.
                                </h1>
                                <h4>
                                    Our company provides goods of premium quality and at fair prices. We are sure that these options are the secret of success.
                                </h4>
                                <p>
                                    That is why we have so many devoted clients all over the country - there is nothing better than thankful customers. Our products are the inspiration to save nature and explore new spaces.
                                </p>
                                <div className="d-flex justify-content-around">
                                    <div>
                                        <h1 className="heading text-warning fw-bold" >10.250</h1>
                                        <h5 className="text-center" >Customers</h5>

                                    </div>
                                    <div className="col-md-6 text-start">
                                        <p className="mt-3">Satisfied customers
                                            <br />
                                            worldwide and growing</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                        {/* section 3 */}
                        <div className="row">

                            <div className="col-md-6 text-start mt-5">
                                <h1 className="heading mt-5">Our planet is
                                    <br />
                                    something
                                    <br />
                                    unbelievable.</h1>
                                <p className="fs-5">We handpicked hundreds of the most spectacular
                                    <br /> summer destinations all over the globe. Relax your body
                                    <br /> and soul in the most remote corners of the world.</p>
                            </div>
                            <div className="col-md-6">
                                <img className="card-body h-100 w-100 rounded-3" src="https://i.ibb.co/HdwDTQx/bg1.png" alt="" />

                            </div>
                        </div>

                        {/* section 4 */}
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="heading text-warning text-center">Travel Mama Guides are committed professionals</h1>
                                <ul className="text-start text-decoration-none fs-5">

                                    <i className="far fa-hand-point-right"></i> We are all local to the region and enjoy sharing our knowledge and our appreciation through many years of climbing together and guiding in Central Oregon.
                                    <br />
                                    <i className="far fa-hand-point-right"></i>  Our Smith Rock climbing guide staff and instructors are American Mountain Guide Association certified and trained
                                    <br />
                                    <i className="far fa-hand-point-right"></i> Each of our climbing guides brings a wealth of diverse climbing, professional and outdoor experience to our team.
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;