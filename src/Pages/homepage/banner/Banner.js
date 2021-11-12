import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner ">

            <div className=" md:h-screen h-full md:px-28">
                <div className="md:grid grid-cols-0 md:grid-cols-2  md:h-screen  px-5  md:break-normal break-all col-span-2">
                    <div className="">


                    </div>
                    <div className="justify-center align-middle mt-12 md:mt-60">
                        <h1 className=" md:text-6xl text-xl text-white font-bold mb-2 md:mb-6 font-serif w-72 md:w-full">Save the Earth, Ride in style</h1>

                        <h4 className="text-white md:text-2xl ml-0 md:ml-32  my-2 border-b-2 w-60 font-mono font-bold ">AXQUARONZ EX19 TRAILX BIKE</h4>
                        <div className=" flex flex-row justify-center ml-0 md:ml-32  ">
                            <p className="text-white md:text-xl md:my-3 text-xs text-justify w-60 md:w-5/6 ">    Model : <br />
                                <br /> TRAIL CASCADE DXP-1600</p>
                            <p className="text-white md:text-xl  md:ml-12 ml-0 md:my-3 text-xs text-justify w-60 md:w-5/6 ">     Color : <br />
                                <br /> GREY RUST</p>
                        </div>
                    </div>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="######" fill-opacity="1" d="M0,224L60,224C120,224,240,224,360,240C480,256,600,288,720,288C840,288,960,256,1080,240C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
    );
};

export default Banner;

