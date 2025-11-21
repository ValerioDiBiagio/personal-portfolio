import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {

    return (
        <footer className="bg-black relative z-10">
            <div className="container flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-4 ">
                {/* Logo / Brand */}
                <NavLink
                    to="/"
                    className="text-xl font-bold tracking-widest text-cyan-400 hover:text-cyan-300 transition duration-300 flex items-center space-x-2 neon-text"
                >
                    <img
                        src="./image/logovdb.png"
                        alt="Logo VDB"
                        className="h-20 w-20 hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.7)] transition-all duration-300"
                    />
                </NavLink>

                {/* Social */}
                <div className="flex space-x-4 text-gray-300">
                    <a
                        href="https://mail.google.com/mail/?view=cm&to=dibiagiovalerio@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 neon-hover"
                    >
                        <FaEnvelope className="w-6 h-6" />
                    </a>

                    <a
                        href="https://github.com/ValerioDiBiagio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 neon-hover"
                    >
                        <FaGithub className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/valerio-di-biagio-429769387"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 neon-hover"
                    >
                        <FaLinkedin className="w-6 h-6" />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-gray-300 text-sm text-center p-4 italic">
                &copy; {new Date().getFullYear()} Valerio Di Biagio. Tutti i diritti riservati.
            </div>
        </footer>
    );
};

export default Footer;
