import React from 'react';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function Layout() {
    return (
        <>
            <div className="flex flex-col lg:flex-row min-h-screen">
                <Sidebar />
                <main className="flex-1 overflow-auto">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Layout