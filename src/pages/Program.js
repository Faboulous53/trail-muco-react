import React from 'react';
import Navigation from '../components/Navigation';
import Sponsors from '../components/Sponsors';
import CardRaces from '../components/CardRaces';

const Program = () => {
    return (
        <div>
            <Navigation />
            <div className="container-title">
                <h2>Programme</h2>
            </div>
            <div className="first-container">
                <div className="container-section-program">
                    <h2>
                        Retrouvez ici les parcours prévus pour l'édition 2023
                    </h2>
                    <CardRaces />
                </div>
            </div>

            <Sponsors />
        </div>
    );
};

export default Program;
