import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from "../Navbar";
import Footer from '../Footer';

const MainLayout = () => {
    return (
        <div className='w-full bg-white min-h-screen h-fit'>
            <Navbar />
            <main className='pt-[60px] overflow-x-hidden'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout;