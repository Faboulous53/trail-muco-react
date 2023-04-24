import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const [showLinks, setShowLinks] = useState(false);

    const handlkeShowLinks = () => {
        setShowLinks(!showLinks);
    }

    return (
       <div className="navigation">
        <NavLink to="/">
        <div className="logo">
            <img src="./assets/img/logoTitrev3.png" alt="logo trail-muco Pays de Vitré"/>
        </div>
        </NavLink>
        <div className={`responsive-menu ${showLinks ? "show-nav" : ""}`} onClick={handlkeShowLinks}>
            <span></span>
            
            
        </div>

        <ul className={showLinks ?'show-nav': ""}>
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