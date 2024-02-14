import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import logo from "../../assets/img/logo-soda.svg";

const AuthLayout = () => {
    return (
        <div className='w-full bg-gray-200 min-h-screen h-fit'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-auth">
                <div className="flex text-center justify-center lg:flex mt-20">
                    <img src={logo} className="w-auto h-20 mt-40" />
                </div>
                <div className="flex justify-center px-6 py-12 lg:px-8 mt-8">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AuthLayout