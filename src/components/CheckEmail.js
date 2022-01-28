import React from 'react';
import AppName from './AppName';

const CheckEmail = () => {
    return(
        
        <div className="flex flex-col justify-center items-center h-screen bg-gray-800">
            <AppName/>
            <h2 className="text-white text-center text-2xl py-8">Please check your email for confirmation.</h2>
            <a href="/"><button className="text-white bg-gray-700 px-3 py-2  rounded-md hover:bg-gray-900">Log In</button></a>
        </div>
    );
};

export default CheckEmail;

