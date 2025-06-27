import React from 'react';
import { Link, NavLink } from 'react-router-dom';



function Sidebar() {
    return (
        <aside className='w-64 h-screen grid grid-rows-5 place-content-center bg-slate-800 text-white p-4'>

            <div className="flex justify-center items-center h-32">
                <Link to="/" className="items-center">
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
                        `block py-2 pr-4 pl-3 duration-200 border-b 
                                    ${isActive ? "text-orange-700" : "text-grey-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }>
                    Home
                </NavLink>
            </div>
            <div>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 border-b 
                                    ${isActive ? "text-orange-700" : "text-grey-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }>
                    About
                </NavLink>
            </div>
            <div>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 border-b 
                                    ${isActive ? "text-orange-700" : "text-grey-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }>
                    About
                </NavLink>
            </div>
            <div>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 border-b 
                                    ${isActive ? "text-orange-700" : "text-grey-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }>
                    About
                </NavLink>
            </div>

        </aside>
    );
}

export default Sidebar;