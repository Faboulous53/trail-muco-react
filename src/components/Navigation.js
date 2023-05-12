import React, { useState , useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const [showLinks, setShowLinks] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(1);
    let navbar = document.querySelectorAll('.navigation');

    const handlkeShowLinks = () => {
        setShowLinks(!showLinks);
    }    

    useEffect(() => {
        const handleScroll = () => {
            if (navbar && scrollPosition > window.scrollY && scrollPosition > 0) {
                navbar.style.top = 0;
              } else if (navbar) {
                navbar.style.top = "-100px";
              }
              setScrollPosition(window.scrollY);
            };    
        window.addEventListener('scroll', handleScroll);    
        return () => {
          window.removeEventListener('scroll', handleScroll);         
        };
      }, [scrollPosition, navbar]);

      useEffect(() => {
        if (showLinks) {
          const closeMenu = () => {
            setShowLinks(false);
          };
          document.body.addEventListener("click", closeMenu);
          return () => {
            document.body.removeEventListener("click", closeMenu);
          };
        }
      }, [showLinks]);
      

    return (
       <div className="navigation" ref={(el) => (navbar = el)}>
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
            <a href="https://www.facebook.com/TrailMucoDuPaysDeVitre/?locale=fr_FR" target='_blank' rel="noreferrer">
            <i className="fa-brands fa-facebook"></i>
            </a>            
        </ul>
       </div>
    );
};

export default Navigation;