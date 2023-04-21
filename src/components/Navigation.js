import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
       <div className="navigation">
        <div className="logo">
            <img src="./assets/img/logoTitrev3.png" alt="logo trail-muco Pays de Vitré"/>
        </div>

        <ul>
            <NavLink to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Accueil</li>
            </NavLink>
            <NavLink to="/programme"
            className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Programme</li>
            </NavLink>
            <NavLink to="/inscriptions"
            className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Inscriptions</li>
            </NavLink>
            <NavLink to="/archives"
            className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Archives</li>
            </NavLink>
            <NavLink to="/contact"
            className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Contact</li>
            </NavLink>
        </ul>
       </div>
    );
};

export default Navigation;