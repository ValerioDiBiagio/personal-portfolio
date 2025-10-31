import React from 'react';
import { NavLink } from 'react-router-dom';


interface HeaderProps {
    sitename: string;
}

const Header: React.FC<HeaderProps> = ({ sitename }) => {
    const navItems = [
        { label: 'Home', path: '/home' },
        { label: 'Progetti', path: '/projects' },
        { label: 'Chi sono', path: '/aboutme' },
        { label: 'Contatti', path: '/contacts' },
    ];
    return (
        <header>
            <div>
                <h1>
                    {sitename}
                </h1>

                <nav>
                    {navItems.map((item) => (
                        <NavLink className="pr-2" key={item.label} to={item.path} >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Header;
