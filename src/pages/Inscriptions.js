import React from 'react';
import Navigation from '../components/Navigation';
import Sponsors from '../components/Sponsors';

const Inscriptions = () => {
    return (
        <div>
            <div>
                <Navigation />
                <div className="container-title">
                    <h2>Inscriptions</h2>
                </div>
                <div className="container-section-inscription">
                    <div className="why-trail-left inscription">
                        <h3 className="">
                            Les inscriptions sont actuellement fermées.
                        </h3>
                        <p>
                            La date d'ouverture de celles-ci n'est pas encore
                            connue.
                        </p>
                        <div className="inscription-bloc">
                            {/* <div className="containers-inscription">
                                <h4>Via Internet:</h4>
                                <p>
                                    Cliquez sur le logo de notre partenaire
                                    Klikego ci-dessous:
                                </p>
                                <a
                                    href="https://www.klikego.com/inscription/trail-muco-pays-de-vitre-17eme-edition-base-de-loisir-de-haute-vilaine-st-mherve--la-chapelle-erbree-2023/running-marche-nordique/1432099242027-8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="../assets/img/logoKlikego.png"
                                        alt="logo-klikego"
                                    />
                                </a>
                                <em>
                                    * Attention, l'inscription nécessite la
                                    création d'un compte sur Klikego.{' '}
                                </em>
                            </div> */}
                            {/* <div className="inscription-bloc">
                                <div className="containers-inscription">
                                    <h4>Sur place:</h4>
                                    <p className="text">
                                        Pour des questions d'organisation, les
                                        inscriptions sur place sont possibles
                                        mais déconseillées.
                                    </p>
                                    <p className="majoration">
                                        
                                        Celles-ci entrainent une majoration de
                                        2€ supplémentaires.
                                    </p>
                                </div>
                            </div>
                            <em>
                                * Les inscriptions pour les randonnées et les
                                courses enfants sont possibles uniquement sur
                                place.
                                <br />
                                Par conséquent, uniquement pour ces courses,
                                aucune majoration ne sera appliquée.
                            </em> */}
                        </div>
                    </div>
                </div>
                {/* <Footer /> */}
                <Sponsors />
            </div>
        </div>
    );
};

export default Inscriptions;
