import React from 'react';
import { Link, NavLink } from 'react-router-dom';



function Sidebar() {
    return (
        <aside className='w-64 h-screen bg-slate-800 text-white p-4 flex flex-col items-center justify-start space-y-12'>

            <div className="h-32">
                <Link to="/" className="i">
                    <img
                        src="logo.png"
                        className=" h-24 "
                        alt="Logo"
                    />
                </Link>
            </div>
            <div>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `py-2 pr-4 pl-3 duration-200 border-b 
                                    ${isActive ? "text-orange-400" : "text-gray-200"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0`
                    }>
                    Home
                </NavLink>
            </div>
            <div>
                <NavLink
                    to="/new"
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 border-b 
                                    ${isActive ? "text-orange-400" : "text-gray-200"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0`
                    }>
                    Add Entry
                </NavLink>
            </div>
            <div>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 border-b 
                                    ${isActive ? "text-orange-400" : "text-gray-200"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0`
                    }>
                    About
                </NavLink>
            </div>
            <div className="mt-8">
                <hr className="my-4 border-gray-600" />
                <span className="text-sm text-gray-400 uppercase">Quick Links</span>
            </div>
            <div>
                <NavLink
                    to="/toggle"
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 border-b 
                                    ${isActive ? "text-orange-400" : "text-gray-200"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0`
                    }>
                    Toggle Theme
                </NavLink>
            </div>
            <div>
                <NavLink
                    to="/export"
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 border-b 
                                    ${isActive ? "text-orange-400" : "text-gray-200"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0`
                    }>
                    Export Journal
                </NavLink>
            </div>

        </aside>
    );
}

export default Sidebar;