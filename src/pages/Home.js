import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation />
            <header className="content-header">
                <div className="site-off">
                    <img
                        src="./assets/img/vaincre-la-mucoviscidose.png"
                        alt="logo-vaincre-ma-mucovisidose"
                    />
                    <a
                        href="https://www.vaincrelamuco.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button>Visiter le site officiel</button>
                    </a>
                </div>
            </header>
            <section className="new-trail">
                <img
                    src="./assets/img/edition2023.webp"
                    alt="trail muco édition 2023"
                />
            </section>
            <section className="why-trail">
                <div className="why-trail-left">
                    <div className="why-trail-header">
                        <h1>Trail muco</h1>
                        <h3>Pourquoi?</h3>
                        <p className='align'>
                            Comprendre en quelques mots qui nous sommes et ce
                            qui nous anime depuis de nombreuses années.
                        </p>
                    </div>
                    <div className="why-trail-first">
                        <h2><i class="fa-solid fa-house-medical-circle-check"></i>Vaincre la mucoviscidose.</h2>                        
                        <p>
                            Depuis bientôt 15 ans, un groupe de bénévoles
                            organisent ce trail muco pour récolter des fonds
                            dans le pays de Vitré pour lutter contre la
                            mucoviscidose.
                        </p>
                    </div>
                    <div className="why-trail-center">
                        <h2><i class="fa-solid fa-people-group"></i>Des partenaires pour une bonne cause.</h2>
                        
                        <p>
                            De nombreux partenaires fidèles nous soutiennent
                            dans notre action et nous permettent d'aller
                            toujours plus loin. Un énorme MERCI à eux sans qui
                            nous ne serions rien!
                        </p>
                    </div>
                    <div className="why-trail-last">
                        <h2><i class="fa-solid fa-person-running"></i>Des coureurs et des marcheurs.</h2>
                        
                        <p>
                            Vous êtes de plus en plus nombreux à venir tester
                            votre nature au travers des différentes courses et
                            marches proposées. Alors petits et grands,
                            n'hésitez-pas, nous vous attendons encore nombreux
                            cette année.
                        </p>
                    </div>
                </div>
                <div className="why-trail-right">
                    <img
                        src="./assets/img/moveformuco.jpg"
                        alt="move for muco"
                    />
                </div>
            </section>
        </div>
    );
};

export default Home;
