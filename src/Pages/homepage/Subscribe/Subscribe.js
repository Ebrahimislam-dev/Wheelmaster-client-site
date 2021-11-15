import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div className="subscribebanner">
            <div className="grid grid-cols-2">

                <div>
                    <div className=" mb-8 uppercase md:pl-24 ">
                        {/* <h1 className=" subline mt-3"></h1> */}
                        <h1 className="subline md:pt-52 pb-5  text-white animate-pulse">
                            GET MORE DISCOUNT
                        </h1>

                    </div>
                    <div>
                        <h1 className="md:text-5xl text-white">
                            SUBSCRIBE & GET 15% OFF
                        </h1>
                    </div>
                    <div className=" pt-2 md:pt-20 pb-36">
                        <input
                            placeholder=" Your Email "
                            className="w-10/12 md:py-3 border border-transparent focus:outline-none focus:ring-2 focus:ring-red-600   focus:border-transparent"
                        />
                        <br />
                        <button className="md:w-4/12  md:py-2 mt-2 md:rounded-xl bg-yellow-500 text-black font-bold text-md md:text-xl  mb-3" type="submit">SUBSCRIBE</button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Subscribe;