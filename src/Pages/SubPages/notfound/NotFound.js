import React from 'react';
import './NotFound.css'
import { NavLink } from 'react-router-dom';
const NotFound = () => {
    return (

        <div className="error">
            <div className="">  
              {/* Error UI */}
                <div className="mb-12">
                    <NavLink className=" no-underline font-bold cursor-pointer rounded-full py-3 px-5  bg-red-600 text-white uppercase mt-24" to="/home">home page</NavLink>

                </div>
            </div>
        
        </div>
    );
};

export default NotFound;