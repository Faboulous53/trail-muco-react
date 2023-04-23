import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    let text = "Depuis bientôt 15 ans, un groupe de bénévoles organisent ce trail muco pour récolter des fonds dans le pays de Vitré pour lutter contre la mucoviscidose.";
    
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
