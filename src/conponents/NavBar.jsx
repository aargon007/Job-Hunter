import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom'
import {
    Bars3BottomRightIcon,
    XMarkIcon,
  } from '@heroicons/react/24/solid'

const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const handleNavigation = ()=>{
    navigate("/all-jobs")
  }

  return (
    <div className="bg-gray-100 py-5 px-5 md:px-28">
        <div className="relative flex items-center justify-between">
       
            <h1 className="inline-flex items-center font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                Job Hunter
            </h1>

            <ul className="items-center hidden space-x-8 md:flex">
                <li>
                    <NavLink  to="/" className={({ isActive }) => (isActive ? "active" : "default" ) } >
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink  to="/statistics" className={({ isActive }) => (isActive ? "active" : "default")} >
                    Statistics
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/applied-jobs" className={({ isActive }) => (isActive ? "active" : "default")}>
                    Applied Jobs
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "default")}>
                    Blog
                    </NavLink>
                </li>
            </ul>
            <button onClick={handleNavigation} className="btn-primary hidden md:block">
                    Start Applying
            </button>

            {/* Mobile Navbar Section */}
            <div className="md:hidden">
                {/* Dropdown Open Button */}
                <button aria-label="Open Menu" title="Open Menu" onClick={() => setIsMenuOpen(true)} >
                    <Bars3BottomRightIcon className="w-8 text-gray-600" />
                </button>
                {isMenuOpen && (
                    <div className="absolute top-0 left-0 w-full z-10">
                        <div className="p-5 bg-white border rounded shadow-sm">
                            {/* Logo & Button section */}
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <Link to="/" className="inline-flex items-center">
                                        <span className=" text-xl font-bold tracking-wide text-gray-800">
                                            Job Hunter
                                        </span>
                                    </Link>
                                </div>
                                {/* Dropdown menu close button */}
                                <div>
                                    <button aria-label="Close Menu" title="Close Menu"  onClick={() => setIsMenuOpen(false)} >
                                        <XMarkIcon className="w-5 text-gray-600" />
                                    </button>
                                </div>
                            </div>
                            {/* Mobile Nav Items Section */}
                            <nav>
                                <ul className="space-y-4">
                                    <li>
                                        <Link to="/" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/statistics"  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>
                                            Statistics
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/applied-jobs"  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>
                                            Applied Jobs
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/blog" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400" onClick={() => setIsMenuOpen(false)}>
                                        Blog
                                        </Link>
                                    </li>
                                </ul>
                                <button className="btn-primary mt-5" onClick={()=> {setIsMenuOpen(false);handleNavigation()}}>Start Applying</button>
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};

export default NavBar;
