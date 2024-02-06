import React from 'react';
import Navigation from '../components/Navigation';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';

const Program = () => {
    return (
        <div className="section-program">
            <Navigation />
            <div className="container-title">
                <h2>Programme</h2>
            </div>
            <div className="first-container header-program">
                {/* en attente de maj */}
                <div className="update">
                <h2>Attention, il s'agit de l'édition 2023.</h2>
                <p>Les données ci-dessous ne sont pas actualisées pour 2024</p>
                </div>                
                <h3> Vendredi 6 octobre 2023 </h3>

                <section className="container-section program nocturne">
                    <div className="children-left">
                        <img
                            className="children-picture"
                            src="../assets/img/nocturne.jpg"
                            alt="course nocturne lors du trail-muco"
                        />
                    </div>
                    <div className="children-right">
                        <h2>Les Cap'Tambule</h2>
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
                            <li className="custom-li">
                                12 km (10€)
                                <a
                                    href="../assets/img/parcours/TRAIL_MUCO_GRAND_CAPTAMBULE_12KM_page-0001.jpg"
                                    target="_blank"
                                    download="TRAIL_MUCO_GRAND_CAPTAMBULE_12KM_page-0001.jpg"
                                >
                                    <button className="btn-race">
                                        Télécharger le tracé
                                    </button>
                                </a>
                            </li>
                            <li className="custom-li">
                                5 km (8€)
                                <a
                                    href="../assets/img/parcours/TRAIL_MUCO_PETIT_CAPTAMBULE_5KM_page-0001.jpg"
                                    target="_blank"
                                    download="TRAIL_MUCO_PETIT_CAPTAMBULE_5KM_page-0001.jpg"
                                >
                                    <button className="btn-race">
                                        Télécharger le tracé
                                    </button>
                                </a>
                            </li>
                        </ul>
                        <em>* Certificat médical obligatoire.</em>
                        <div className="warning">
                            <div className="wild">
                                <i className="fa-solid fa-triangle-exclamation custom"></i>
                                <p>Pas de gobelets aux ravitaillements</p>
                                <i className="fa-solid fa-triangle-exclamation custom"></i>
                            </div>
                            <p>Prévoir vos écotasses.</p>
                        </div>
                    </div>
                </section>

                <h3> Samedi 7 octobre 2023 </h3>

                <section className="container-section program">
                    <div
                        className="children-left"
                        data-aos="fade-right"
                        data-aos-offset="200"
                    >
                        <img
                            className="children-picture"
                            src="../assets/img/marche-nordique.jpg"
                            alt="marche nordique lors du trail-muco"
                        />
                    </div>
                    <div
                        className="children-right"
                        data-aos="fade-left"
                        data-aos-offset="200"
                    >
                        <h2>Marches Nordiques de l'Aurore</h2>
                        <strong>
                            Départ de la base de loisirs de Haute Vilaine - à St
                            M'Hervé (35)
                        </strong>
                        <br />
                        <em>Départ à 10h00 (Échauffement à 9h45).</em>
                        <ul className="nocturne-list">
                            <li className="custom-li nordique">
                                Le Delanchy, 16km chronométrée (12€) <br />
                                <span>
                                    <i className="fa-solid fa-flag-checkered first"></i>
                                    Challenge Nordique Bretagne
                                    <i className="fa-solid fa-flag-checkered last"></i>
                                </span>
                                <a
                                    href="../assets/img/parcours/MARCHE_NORDIQUE_CHRONOMETREE_16KM_page-0001.jpg"
                                    target="_blank"
                                    download="MARCHE_NORDIQUE_CHRONOMETREE_16KM_page-0001.jpg"
                                >
                                    <button className="btn-race">
                                        Télécharger le tracé
                                    </button>
                                </a>
                            </li>
                            <li className="custom-li">7 km libre (10€)</li>
                        </ul>
                        <div className="warning">
                            <div className="wild">
                                <i className="fa-solid fa-triangle-exclamation custom"></i>
                                <p>Pas de gobelets aux ravitaillements</p>
                                <i className="fa-solid fa-triangle-exclamation custom"></i>
                            </div>
                            <p>Prévoir vos écotasses.</p>
                        </div>
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
                        data-aos-offset="200"
                    >
                        <img
                            className="children-picture"
                            src="../assets/img/enfant-course.jpg"
                            alt="enfants lors du trail-muco"
                        />
                    </div>
                    <div
                        className="children-right"
                        data-aos="fade-left"
                        data-aos-offset="200"
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
                                800m (enfants nés de 2014 et +)
                                <br />
                                <i className="fa-solid fa-flag-checkered first"></i>{' '}
                                Départ à 10h45{' '}
                                <i className="fa-solid fa-flag-checkered last"></i>
                            </li>
                            <li className="custom-li">
                                2000m (enfants nés de 2013 et avant)
                                <br />
                                <i className="fa-solid fa-flag-checkered first "></i>{' '}
                                Départ à 11h00{' '}
                                <i className="fa-solid fa-flag-checkered last "></i>
                            </li>
                            <li className="custom-li">
                                3000m (enfants nés en 2011 et avant)
                                <br />
                                <i className="fa-solid fa-flag-checkered first"></i>{' '}
                                Départ à 11h15{' '}
                                <i className="fa-solid fa-flag-checkered last"></i>
                            </li>
                        </ul>
                        <a
                            href="../assets/documents/coupon inscription enfant trail-muco.jpg"
                            target="_blank"
                            download="coupon inscription enfant trail-muco.jpg"
                        >
                            <button className="btn-race">
                                Télécharger le coupon d'inscription
                            </button>
                        </a>
                        <div className="warning">
                            <div className="wild">
                                <i className="fa-solid fa-triangle-exclamation custom"></i>
                                <p>Pas de gobelets aux ravitaillements</p>
                                <i className="fa-solid fa-triangle-exclamation custom"></i>
                            </div>
                            <p>Prévoir vos écotasses.</p>
                        </div>
                        <em>*Attestation d'accord parental obligatoire. </em>
                    </div>
                </section>
                <section className="container-section program">
                    <div
                        className="children-left"
                        data-aos="fade-right"
                        data-aos-offset="200"
                    >
                        <img
                            className="children-picture"
                            src="../assets/img/trail-adult.jpg"
                            alt="course adulte lors du trail-muco"
                        />
                    </div>
                    <div
                        className="children-right"
                        data-aos="fade-left"
                        data-aos-offset="200"
                    >
                        <h2>Trails Adultes</h2>
                        <strong>
                            Départ de la base de loisirs de Haute Vilaine - à St
                            M'Hervé (35)
                        </strong>
                        <br />
                        <ul>
                            <li className="custom-li">
                                29km (12€)
                                <br />
                                <i className="fa-solid fa-flag-checkered first"></i>{' '}
                                Départ à 13h30{' '}
                                <i className="fa-solid fa-flag-checkered last"></i>
                                <a
                                    href="../assets/img/parcours/TRAIL_MUCO_29KM_page-0001.jpg"
                                    target="_blank"
                                    download="TRAIL_MUCO_29KM_page-0001.jpg"
                                >
                                    <button className="btn-race">
                                        Télécharger le tracé
                                    </button>
                                </a>
                            </li>
                            <li className="custom-li">
                                22km (12 €)
                                <br />
                                <i className="fa-solid fa-flag-checkered first"></i>{' '}
                                Départ à 14h00{' '}
                                <i className="fa-solid fa-flag-checkered last"></i>
                                <a
                                    href="../assets/img/parcours/TRAIL_MUCO_22KM_page-0001.jpg"
                                    target="_blank"
                                    download="TRAIL_MUCO_22KM_page-0001.jpg"
                                >
                                    <button className="btn-race">
                                        Télécharger le tracé
                                    </button>
                                </a>
                            </li>
                            <li className="custom-li">
                                La Pigeon-Trail 10km (12€)
                                <br />
                                <i className="fa-solid fa-flag-checkered first"></i>{' '}
                                Départ à 15h00{' '}
                                <i className="fa-solid fa-flag-checkered last"></i>
                                <a
                                    href="../assets/img/parcours/TRAIL_MUCO_10KM_page-0001.jpg"
                                    target="_blank"
                                    download="TRAIL_MUCO_10KM_page-0001.jpg"
                                >
                                    <button className="btn-race">
                                        Télécharger le tracé
                                    </button>
                                </a>
                            </li>
                        </ul>
                        <div className="warning">
                            <div className="wild">
                                <i class="fa-solid fa-triangle-exclamation custom"></i>
                                <p>Pas de gobelets aux ravitaillements</p>
                                <i class="fa-solid fa-triangle-exclamation custom"></i>
                            </div>
                            <p>Prévoir vos écotasses.</p>
                        </div>
                        <em>* Certificat médical obligatoire.</em>
                    </div>
                </section>
                <section className="container-section program">
                    <div
                        className="children-left"
                        data-aos="fade-right"
                        data-aos-offset="200"
                    >
                        <img
                            className="children-picture"
                            src="../assets/img/rando.jpg"
                            alt="Randonnée lors du trail muco"
                        />
                    </div>
                    <div
                        className="children-right"
                        data-aos="fade-left"
                        data-aos-offset="200"
                    >
                        <h2>Les Randos</h2>
                        <strong>
                            Départ de la base de loisirs de Haute Vilaine - à St
                            M'Hervé (35)
                        </strong>

                        <ul className="nocturne-list">
                            <li className="custom-li">
                                12km - L'OTSI (6€)
                                <br />
                                <i className="fa-solid fa-flag-checkered first"></i>{' '}
                                Départ: 13h35{' '}
                                <i className="fa-solid fa-flag-checkered last"></i>
                            </li>
                            <li className="custom-li">
                                9km - La Vitré Accueil (6€) <br />
                                <i className="fa-solid fa-flag-checkered first"></i>{' '}
                                Départ: 14h15{' '}
                                <i className="fa-solid fa-flag-checkered last"></i>
                            </li>
                        </ul>
                        <div className="warning">
                            <div className="wild">
                                <i class="fa-solid fa-triangle-exclamation custom"></i>
                                <p>Pas de gobelets aux ravitaillements</p>
                                <i class="fa-solid fa-triangle-exclamation custom"></i>
                            </div>
                            <p>Prévoir vos écotasses.</p>
                        </div>
                        <em>* Inscriptions uniquement sur place.</em>
                    </div>
                </section>
                <section className="container-section program">
                    <div
                        className="children-left"
                        data-aos="fade-right"
                        data-aos-offset="200"
                    >
                        <img
                            className="children-picture"
                            src="../assets/img/défi-planchais.jpg"
                            alt="médailles-récompenses"
                        />
                    </div>
                    <div
                        className="children-right"
                        data-aos="fade-left"
                        data-aos-offset="200"
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
                                Vendredi 6 octobre à 20h (Cap'Tambule).
                                <i className="fa-solid fa-flag-checkered last"></i>
                                <br />
                                <i className="fa-solid fa-flag-checkered first"></i>{' '}
                                Samedi 7 octobre à 14h (Trail 22km)
                                <i className="fa-solid fa-flag-checkered last"></i>
                            </li>
                        </ul>
                        <em>
                            * Classement et récompenses par cumul de la
                            Cap'Tambule 12km et du trail de 22km.
                        </em>
                        <div className="warning">
                            <div className="wild">
                                <i class="fa-solid fa-triangle-exclamation custom"></i>
                                <p>Pas de gobelets aux ravitaillements</p>
                                <i class="fa-solid fa-triangle-exclamation custom"></i>
                            </div>
                            <p>Prévoir vos écotasses.</p>
                        </div>
                    </div>
                </section>
                <section className="container-section program end">
                    <div
                        className="children-left"
                        data-aos="fade-right"
                        data-aos-offset="200"
                    >
                        <img
                            className="children-picture"
                            src="../assets/img/repas.jpg"
                            alt="repas assiette charcuteries"
                        />
                    </div>
                    <div
                        className="children-right"
                        data-aos="fade-left"
                        data-aos-offset="200"
                    >
                        <h2>
                            <i className="fa-solid fa-utensils first"></i> Repas
                            du samedi soir (07/10){' '}
                            <i className="fa-solid fa-utensils last"></i>
                        </h2>
                        <strong>
                            Repas en salle à Bourgon à 20h00 (17€)
                            <br />
                            Ou
                            <br />À emporter, de 18h à 19h à la salle de la
                            Chapelle-Erbrée (16€)
                        </strong>

                        <ul className="nocturne-list">
                            <li className="custom-li">
                                Règlement par chèque ou espèces.
                                <br />
                                Inscription de préférence par téléphone au
                                06.79.76.17.61.
                            </li>
                        </ul>
                        <a
                            href="../assets/documents/Bulletin inscription repas.jpg"
                            target="_blank"
                            download="Bulletin inscription repas.jpg"
                        >
                            <button className="btn-race">
                                Télécharger le coupon d'inscription
                            </button>
                        </a>
                        <em>* Chèque à l'ordre de VLM Virade de Vitré.</em>
                    </div>
                </section>
            </div>
            <Footer />
            <Sponsors />
        </div>
    );
};

export default Program;
