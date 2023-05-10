import React from 'react';
import Navigation from '../components/Navigation';
import Sponsors from '../components/Sponsors';

const Inscriptions = () => {
    return (
        <div>
             <div>
            <Navigation/>
            <div className="container-title">
            <h2>Inscriptions</h2>
            </div>
            <div className="container-section-inscription">
                <div className="why-trail-left inscription">
                    <p>Les inscriptions ne sont pas encore ouvertes pour l'édition 2023.  Comme d'habitude, les modalités d'inscriptions sont les suivantes:</p>                    
                    <ul>
                        <li>- Sur internet via le site klikego (un lien sera disponible).</li>
                        <li>- Sur place (majoration de 2€).</li>
                        <li>- À l'aide du formulaire téléchargeable sur le site.</li>
                        <li>- Les inscriptions au repas uniquement via le formulaire.</li>
                    </ul>
                                       
                    <img src="../assets/img/course1.jpg" alt="coureurs noctunes" />
                </div>                
            </div>

            <Sponsors/>
        </div>
        </div>
    );
};

export default Inscriptions;