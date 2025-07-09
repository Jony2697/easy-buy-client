import React from 'react';
import Navbar from '../pages/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;