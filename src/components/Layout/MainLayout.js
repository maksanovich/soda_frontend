import React from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from "../Navbar";

const MainLayout = () => {
    return (
        <div className='w-full bg-gray-200 min-h-screen h-fit'>
            <Navbar />
            <main className='pt-[60px] overflow-x-hidden'>
                <Outlet />
            </main>
            <Toaster
                position="top-right"
                reverseOrder={true}
                gutter={2}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                        background: '#363636',
                        borderRadius: '4px',
                        color: '#fff',
                    },

                    // Default options for specific types
                    success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }} />
        </div>
    )
}

export default MainLayout;