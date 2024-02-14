import React from 'react';
import { Outlet } from 'react-router-dom';

import logo from "../../assets/img/logo-soda.svg";

const AuthLayout = () => {
    return (
        <div className='w-full bg-white min-h-screen h-fit'>
            <div className="md:flex justify-between items-center bg-auth bg-cover min-h-screen h-fit">
                <div className="md:w-1/2 pt-9 md:pt-0 flex justify-center">
                    <img src={logo} className="w-auto h-20" />
                </div>
                <div className="md:w-1/2 flex justify-center px-6 py-12 lg:px-8 mt-8">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AuthLayout