import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
       <div className="navigation">
        <ul>
            <NavLink to="/">
            <li>Accueil</li>
            </NavLink>
            <NavLink to="/programme">
            <li>Programme</li>
            </NavLink>
            <NavLink to="/inscriptions">
            <li>Inscriptions</li>
            </NavLink>
            <NavLink to="/archives">
            <li>Archives</li>
            </NavLink>
            <NavLink to="/contact">
            <li>Contact</li>
            </NavLink>
        </ul>
       </div>
    );
};

export default Navigation;