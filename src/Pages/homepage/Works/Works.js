import React from 'react';
import './Work.css'
const Works = () => {
    return (
        <div className="bg-black container-fluid full-width">
            <div className=" mb-20">
                <div className="flex justify-center mb-8 font-mono uppercase ">
                    <span class=" line"></span>

                    <h1 className="text-white mt-2 text-2xl">How It Works</h1>
                </div>

                <h1 className="text-white mt-2 text-4xl">WE CREATED THE MOST ADVANCED <br /> BICYCLE TECHNOLOGY</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div>
                    <div className=" pl-1 py-5 mx-5 icons"  >
                        <i className="text-white text-7xl fas fa-bicycle"></i>

                    </div>
                    <div>
                        <h1 className="text-white mt-2 text-2xl">POWER YOUR RIDE</h1>
                        <p className="text-gray-400 text-sm mt-1">Power Your Ride Stamina With Us <br /> we provide you best Bicyle. It will <br /> give you best experience in a bycyle</p>
                    </div>
                </div>
                <div>
                    <div className=" pl-1 py-5 mx-5 icons"  >
                        <i className="text-white text-6xl fas fa-search-dollar"></i>

                    </div>
                    <div>
                        <h1 className="text-white mt-2 text-2xl">Search Bikes</h1>
                        <p className="text-gray-400  text-sm mt-1">Compare bike  prices, bike types.<br /> No waste of  time on the internet,<br /> everything is in one place!</p>
                    </div>
                </div>
                <div>
                    <div className=" pl-1 py-5 mx-5 icons"  >
                        <i className="text-white text-6xl fas fa-money-check-alt"></i>
                        
                    </div>
                    <div>
                        <h1 className="text-white mt-2 text-2xl">Easy Payment</h1>
                        <p className="text-gray-400 text-sm mt-1 text-center">No waste of time during your<br /> holidays to find a service point on the spot!<br />  No language barrier, thanks to our multilingual <br /> team! At the same price you would pay on the spot!</p>
                    </div>
                </div>
                <div>
                    <div className=" pl-1 py-5 mx-5 icons"  >
                        <i className="text-white text-6xl fas fa-tachometer-alt"></i>
                        

                    </div>
                    <div>
                        <h1 className="text-white mt-2 text-2xl">MONITORING SPEED</h1>
                        <p className="text-gray-400 text-sm mt-1">You will be able to Measure Your speed <br /> at any time, it will give you your per hour <br /> kilometer speed, it also give you your avg <br /> speed, and show you your stamina per hour </p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Works;