import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';



type HeaderProps = {
    sitename: string;
}

const Header: React.FC<HeaderProps> = ({ sitename }) => {
    // Stato per gestire l'apertura/chiusura del menu su mobile
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Progetti', path: '/projects' },
        { label: 'Chi Sono', path: '/aboutme' },
        { label: 'Contatti', path: '/contacts' },
    ];

    return (
        <header className="bg-[#1d1f21] shadow-md fixed w-full top-0 z-50 border-b border-gray-700/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

                {/* LOGO */}
                <NavLink
                    to="/"
                    className="
                      text-xl font-bold tracking-widest 
                      text-cyan-400 hover:text-cyan-300 
                      transition duration-300 neon-text
                      flex items-center space-x-2 
                    "
                >
                    <img
                        src='./image/logovdb.png'
                        alt={sitename || 'Logo VDB'}
                        className="
                          h-30 w-30 
                          transform transition-all duration-300 ease-in-out
                          hover:filter 
                          hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.7)] 
                        "
                    />
                </NavLink>

                <button
                    className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300  transition duration-300 z-50 group"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    {isOpen ? (
                        <FontAwesomeIcon
                            icon={faTimes}
                            className="w-6 h-6 text-gray-300 transition-colors duration-300 hover:text-cyan-400"
                        />
                    ) : (
                        <FontAwesomeIcon
                            icon={faBars}
                            className="w-6 h-6 text-gray-300 transition-colors duration-300 hover:text-cyan-400"
                        />
                    )}
                </button>

                {/*Desktop */}
                <nav className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.label}
                            to={item.path}
                            className={({ isActive }) =>
                                `text-base font-medium transition duration-300 uppercase tracking-wider
                                ${isActive
                                    ? 'text-lime-300 border-b-2 border-lime-300'
                                    : 'text-gray-300 hover:text-cyan-400 neon-hover text-shadow'
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
            </div>

            {/* Mobile */}
            <div
                className={`md:hidden absolute top-16 left-0 w-full bg-[#1d1f21] transition-all duration-300 overflow-hidden ${isOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                onClick={() => setIsOpen(false)}
            >
                <nav className="flex flex-col p-4 space-y-4 items-center">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.label}
                            to={item.path}
                            className={({ isActive }) =>
                                `block py-2 text-lg font-semibold border-b border-gray-700 transition duration-300 uppercase tracking-wider'
                                ${isActive
                                    ? 'text-lime-300'
                                    : 'text-gray-300 hover:text-cyan-400'
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Header;