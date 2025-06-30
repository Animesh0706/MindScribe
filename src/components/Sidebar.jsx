import React from 'react';
import { Link, NavLink } from 'react-router-dom';



function Sidebar() {
    return (
        <aside className='w-full lg:w-64 h-auto lg:h-screen bg-slate-800 text-white p-4 flex flex-col items-center space-y-12'>
            <div className="h-32">
                <Link to="/">
                    <img
                        src="/logo.png"
                        className="h-24"
                        alt="Logo"
                    />
                </Link>
            </div>

            <div className="w-full text-center">
                <NavLink
                    to="home"
                    className={({ isActive }) =>
                        `block py-2 duration-200 
                        ${isActive ? "text-orange-400" : "text-gray-200"} 
                        hover:text-orange-400`
                    }>
                    Home
                </NavLink>
            </div>

            <div className="w-full text-center">
                <NavLink
                    to="new"
                    className={({ isActive }) =>
                        `block py-2 duration-200 
                        ${isActive ? "text-orange-400" : "text-gray-200"} 
                        hover:text-orange-400`
                    }>
                    Add Entry
                </NavLink>
            </div>

            <div className="w-full text-center">
                <NavLink
                    to="about"
                    className={({ isActive }) =>
                        `block py-2 duration-200  
                        ${isActive ? "text-orange-400" : "text-gray-200"} 
                        hover:text-orange-400`
                    }>
                    About
                </NavLink>
            </div>

            <div className="mt-8 w-full px-3">
                <hr className="my-4 border-gray-600" />
                <span className="text-sm text-gray-400 uppercase">Quick Links</span>
            </div>

            <div className="w-full text-center">
                <NavLink
                    to="toggle"
                    className={({ isActive }) =>
                        `block py-2 duration-200 
                        ${isActive ? "text-orange-400" : "text-gray-200"} 
                        hover:text-orange-400`
                    }>
                    Toggle Theme
                </NavLink>
            </div>

            <div className="w-full text-center">
                <NavLink
                    to="export"
                    className={({ isActive }) =>
                        `block py-2 duration-200  
                        ${isActive ? "text-orange-400" : "text-gray-200"} 
                        hover:text-orange-400`
                    }>
                    Export Journal
                </NavLink>
            </div>
        </aside>
    );
}

export default Sidebar;