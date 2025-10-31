import React from 'react';
import { NavLink } from 'react-router-dom';


interface HeaderProps {
    sitename: string;
}

const Header: React.FC<HeaderProps> = ({ sitename }) => {
    const navItems = [
        { name: 'Home', to: 'home' },
        { name: 'Progetti', to: 'projects' },
        { name: 'Chi sono', to: 'aboutme' },
        { name: 'Contatti', to: 'contacts' },
    ];
    return (
        <header>
            <div>
                <h1>
                    {sitename}
                </h1>

                <nav>
                    {navItems.map((item) => (
                        <NavLink className="pr-2" key={item.name} to={item.to} >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Header;
