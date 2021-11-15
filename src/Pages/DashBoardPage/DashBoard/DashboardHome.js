import React from 'react';
import useValue from '../../../hooks/useValue';

const DashboardHome = () => {
    const { user } = useValue();
    return (
        <div >
            <h1 className="text-gray-200 md:text-xl text-sm  pt-10">Hii, <span className=" text-gray-300">{user.displayName}</span> !! </h1>
            <h1 className="text-gray-200 md:text-3xl text-xl  pt-8 pb-8">Welcome  To <span className=" text-red-500">Wheel </span>Master</h1>

            <h2  className="text-gray-200 md:text-xl text-xs ">This  is Your  DashBoard and You can handle your Orders and Others features Here. <br />  You can Review Us To about our services and your Satisfaction or Disatifiction  </h2>
        
        </div>
    );
};

export default DashboardHome;