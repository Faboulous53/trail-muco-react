import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation />
            <header className='content-header'>
            <div className="site-off">
                <img src="./assets/img/vaincre-la-mucoviscidose.png" alt="logo-vaincre-ma-mucovisidose" />
                <a href="https://www.vaincrelamuco.org/" target="_blank" rel="noopener noreferrer">
                    <button>Visiter le site officiel</button>
                </a>
            </div>
            </header>           
            
        </div>
    );
};

export default Home;
