import React from 'react';
import Navigation from '../components/Navigation';
import Sponsors from '../components/Sponsors';

const Program = () => {
    return (
        <div>
            <Navigation />
            <div className="container-title">
                <h2>Programme</h2>
            </div>
            <div className="first-container header-program">
                <h2>Retrouvez ici les parcours prévus pour l'édition 2023</h2>
                <h3> Samedi 7 octobre 2023 </h3>

                <section className="container-section">
                    <div className="children-left">
                        <img
                            className="children-picture"
                            src="../assets/img/enfant-course.jpg"
                            alt="Enfants lors du trail-muco"
                        />
                    </div>
                    <div className="children-right">
                        <h2>Course Enfants</h2>
                        <strong>
                            Départ à la base de loisirs de Haute Vilaine - à St
                            M'Hervé
                        </strong>
                        <br />
                        <em>Premier départ à partir de 10h45.</em>
                        <ul>
                            <li>800m (enfants nés de 2014 à 2015). <br/>
                            <i class="fa-solid fa-flag-checkered"></i> Départ à 10h45 <i class="fa-solid fa-flag-checkered"></i></li>
                            <li>1500m (enfants nés de 2012 à 2013). <br/>
                            <i class="fa-solid fa-flag-checkered"></i> Départ à 10h45 <i class="fa-solid fa-flag-checkered"></i></li>
                            <li>3000m (enfants nés de 2010 à 2011). <br/>
                            <i class="fa-solid fa-flag-checkered"></i> Départ à 10h45 <i class="fa-solid fa-flag-checkered"></i></li>
                            <li>4500m (garçons nés de 2008 à 2009). <br/>
                            <i class="fa-solid fa-flag-checkered"></i> Départ à 10h45 <i class="fa-solid fa-flag-checkered"></i></li>
                            <li>3000m (filles nées de 2008 à 2009). <br/>
                            <i class="fa-solid fa-flag-checkered"></i> Départ à 10h45 <i class="fa-solid fa-flag-checkered"></i></li>
                        </ul>
                    </div>
                </section>
            </div>

            <Sponsors />
        </div>
    );
};

export default Program;
