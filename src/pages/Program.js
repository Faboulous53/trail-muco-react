import React from 'react';
import Navigation from '../components/Navigation';
import Sponsors from '../components/Sponsors';

const Program = () => {
    return (
        <div className="section-program">
            <Navigation />
            <div className="container-title">
                <h2>Programme</h2>
            </div>
            <div className="first-container header-program">
                <h2>Retrouvez ici les parcours prévus pour l'édition 2023</h2>
                <h3> Vendredi 7 octobre 2023 </h3>

                <section className="container-section program nocturne">
                    <div
                        className="children-left"
                        data-aos="fade-right"
                        data-aos-offset="300"
                    >
                        <img
                            className="children-picture"
                            src="../assets/img/nocturne.jpg"
                            alt="Enfants lors du trail-muco"
                        />
                    </div>
                    <div
                        className="children-right"
                        data-aos="fade-left"
                        data-aos-offset="300"
                    >
                        <h2>Les Cap'Tambules</h2>
                        <strong>
                            Départ centre bourg de La Chapelle Erbrée.
                        </strong>
                        <br />
                        <em>
                            <i className="fa-solid fa-flag-checkered first "></i>{' '}
                            Départs groupés à 20h00{' '}
                            <i className="fa-solid fa-flag-checkered last"></i>
                        </em>
                        <ul className="nocturne-list">
                            <li className="custom-li">12 km (10€)</li>
                            <li className="custom-li">5 km (8€) </li>
                        </ul>
                        <em>
                            * Certificat médical obligatoire ainsi qu'une lampe
                            frontale et bandes réfléchissantes.
                        </em>
                    </div>
                </section>

                <h3> Samedi 7 octobre 2023 </h3>

                <section className="container-section program">
                    <div
                        className="children-left"
                        data-aos="fade-right"
                        data-aos-offset="300"
                    >
                        <img
                            className="children-picture"
                            src="../assets/img/marche-nordique.jpg"
                            alt="Enfants lors du trail-muco"
                        />
                    </div>
                    <div
                        className="children-right"
                        data-aos="fade-left"
                        data-aos-offset="300"
                    >
                        <h2>Marches Nordiques de l'Aurore</h2>
                        <strong>
                            Départ de la base de loisirs de Haute Vilaine - à St
                            M'Hervé (35)
                        </strong>
                        <br />
                        <em>Départ à 10h00 (Échauffement à 9h45).</em>
                        <ul className="nocturne-list">
                            <li className="custom-li">
                                Le Delanchy, 16km chronométrée (12€) <br />
                                <i className="fa-solid fa-flag-checkered first"></i>{' '}
                                Challenge Nordique Bretagne{' '}
                                <i className="fa-solid fa-flag-checkered last"></i>
                            </li>
                            <li className="custom-li">5km libre (10€)</li>
                        </ul>
                        <em>
                            * Licence FFA ou FSCF ou certificat médical
                            obligatoire avec notion marche nordique en
                            compétition (uniquement pour le 16km).
                        </em>
                    </div>
                </section>

                <section className="container-section program">
                    <div
                        className="children-left"
                        data-aos="fade-right"
                        data-aos-offset="300"
                    >
                        <img
                            className="children-picture"
                            src="../assets/img/enfant-course.jpg"
                            alt="Enfants lors du trail-muco"
                        />
                    </div>
                    <div
                        className="children-right"
                        data-aos="fade-left"
                        data-aos-offset="300"
                    >
                        <h2>Course Enfants</h2>
                        <strong>
                            Départ de la base de loisirs de Haute Vilaine - à St
                            M'Hervé (35)
                        </strong>
                        <br />
                        <em>Premier départ à partir de 10h45.</em>
                        <ul>
                            <li className="custom-li">
                                800m (enfants nés de 2014 à 2015)
                                <br />
                                <i className="fa-solid fa-flag-checkered first"></i>{' '}
                                Départ à 10h45{' '}
                                <i className="fa-solid fa-flag-checkered last"></i>
                            </li>
                            <li className="custom-li">
                                1500m (enfants nés de 2012 à 2013)
                                <br />
                                <i className="fa-solid fa-flag-checkered first "></i>{' '}
                                Départ à 10h45{' '}
                                <i className="fa-solid fa-flag-checkered last "></i>
                            </li>
                            <li className="custom-li">
                                3000m (enfants nés de 2010 à 2011)
                                <br />
                                <i className="fa-solid fa-flag-checkered first"></i>{' '}
                                Départ à 10h45{' '}
                                <i className="fa-solid fa-flag-checkered last"></i>
                            </li>
                            <li className="custom-li">
                                4500m (garçons nés de 2008 à 2009)
                                <br />
                                <i className="fa-solid fa-flag-checkered first"></i>{' '}
                                Départ à 10h45{' '}
                                <i className="fa-solid fa-flag-checkered last"></i>
                            </li>
                            <li className="custom-li">
                                3000m (filles nées de 2008 à 2009)
                                <br />
                                <i className="fa-solid fa-flag-checkered first"></i>{' '}
                                Départ à 10h45{' '}
                                <i className="fa-solid fa-flag-checkered last"></i>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="container-section program">
                    <div
                        className="children-left"
                        data-aos="fade-right"
                        data-aos-offset="300"
                    >
                        <img
                            className="children-picture"
                            src="../assets/img/trail-adult.jpg"
                            alt="Enfants lors du trail-muco"
                        />
                    </div>
                    <div
                        className="children-right"
                        data-aos="fade-left"
                        data-aos-offset="300"
                    >
                        <h2>Trails Adultes</h2>
                        <strong>
                            Départ de la base de loisirs de Haute Vilaine - à St
                            M'Hervé (35)
                        </strong>
                        <br />
                        <em>Premier départ à partir de 10h45.</em>
                        <ul>
                            <li className="custom-li">
                                29km (12€)
                                <br />
                                <i className="fa-solid fa-flag-checkered first"></i>{' '}
                                Départ à 13h30{' '}
                                <i className="fa-solid fa-flag-checkered last"></i>
                            </li>
                            <li className="custom-li">
                                22km (prix à définir)
                                <br />
                                <i className="fa-solid fa-flag-checkered first"></i>{' '}
                                Départ à 14h00{' '}
                                <i className="fa-solid fa-flag-checkered last"></i>
                            </li>
                            <li className="custom-li">
                                La Pigeon-Trail 10km-(12€)
                                <br />
                                <i className="fa-solid fa-flag-checkered first"></i>{' '}
                                Départ à 15h00{' '}
                                <i className="fa-solid fa-flag-checkered last"></i>
                            </li>
                        </ul>
                        <em>* Certificat médical obligatoire.</em>
                    </div>
                </section>
                <section className="container-section program">
                    <div
                        className="children-left"
                        data-aos="fade-right"
                        data-aos-offset="300"
                    >
                        <img
                            className="children-picture"
                            src="../assets/img/rando.jpg"
                            alt="Enfants lors du trail-muco"
                        />
                    </div>
                    <div
                        className="children-right"
                        data-aos="fade-left"
                        data-aos-offset="300"
                    >
                        <h2>Les Randos</h2>
                        <strong>
                            Départ de la base de loisirs de Haute Vilaine - à St
                            M'Hervé (35)
                        </strong>

                        <ul className="nocturne-list">
                            <li className="custom-li">
                                12km - L'OTSI <br />
                                <i className="fa-solid fa-flag-checkered first"></i>{' '}
                                Départ: 13h35{' '}
                                <i className="fa-solid fa-flag-checkered last"></i>
                            </li>
                            <li className="custom-li">
                                9km - La Vitré Accueil <br />
                                <i className="fa-solid fa-flag-checkered first"></i>{' '}
                                Départ: 14h15{' '}
                                <i className="fa-solid fa-flag-checkered last"></i>
                            </li>
                        </ul>
                        <em>* Prévoir vos gourdes.</em>
                    </div>
                </section>
                <section className="container-section program">
                    <div
                        className="children-left"
                        data-aos="fade-right"
                        data-aos-offset="300"
                    >
                        <img
                            className="children-picture"
                            src="../assets/img/défi-planchais.jpg"
                            alt="Enfants lors du trail-muco"
                        />
                    </div>
                    <div
                        className="children-right"
                        data-aos="fade-left"
                        data-aos-offset="300"
                    >
                        <h2>Défis Planchais</h2>
                        <strong>
                            Départ de la base de loisirs de Haute Vilaine - à St
                            M'Hervé (35)
                        </strong>

                        <ul className="nocturne-list">
                            <li className="custom-li">
                                34km (18€)
                                <br />
                                <i className="fa-solid fa-flag-checkered first"></i>{' '}
                                Départ: à définir{' '}
                                <i className="fa-solid fa-flag-checkered last"></i>
                            </li>
                        </ul>
                        <em>
                            * Classement et récompenses par cumul de la
                            Cap'Tambules 12km et du trail de 22km.
                        </em>
                    </div>
                </section>
            </div>

            <Sponsors />
        </div>
    );
};

export default Program;
