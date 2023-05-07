import React from 'react';
import Navigation from '../components/Navigation';
import Sponsors from '../components/Sponsors';

const Program = () => {
    return (
        <div>
            <Navigation/>
            <div className="container-title">
            <h2>Programme</h2>
            </div>
            <div className="container-section-program">
                <div className="why-trail-left program">
                    <p>La section programme est en cours de création pour l'édition 2023 <br />
                    Plus d'informations dans les semaines à venir.</p>
                    <img src="../assets/img/pied-running.jpg" alt="" />
                </div>                
            </div>

            <Sponsors/>
        </div>
    );
};

export default Program;