import Navigation from '../components/Navigation';
import { NavLink } from 'react-router-dom';
import Sponsors from '../components/Sponsors';
import Numbers from '../components/Numbers';
import Popup from '../components/Popup';


const Home = () => {   
    return (
        <div>   
            <Popup/>         
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
                    src="./assets/img/imageSlider1-2.png"
                    alt="trail muco édition 2023"
                />
                <h1>Trail Muco</h1>
                <h3>6 et 7 octobre 2023</h3>
            </section>
            <div className="first-container">
                <section className="container-section">
                    <div
                        className="why-trail-left"
                        data-aos="fade-right"
                        data-aos-offset="300"
                    >
                        <div className="why-trail-header">
                            <h2 className="first-title">Trail muco</h2>
                            <h3>Pourquoi?</h3>
                            <p className="align">
                                Comprendre en quelques mots qui nous sommes et
                                ce qui nous anime depuis de nombreuses années.
                            </p>
                        </div>
                        <div className="why-trail-first">
                            <h2>
                                <i className="fa-solid fa-house-medical-circle-check"></i>
                                Vaincre la mucoviscidose.
                            </h2>
                            <p>
                                Depuis bientôt 15 ans, un groupe de bénévoles
                                organisent ce trail muco pour récolter des fonds
                                dans le pays de Vitré pour lutter contre la
                                mucoviscidose.
                            </p>
                        </div>
                        <div className="why-trail-center">
                            <h2>
                                <i className="fa-solid fa-people-group"></i>Des
                                partenaires pour une bonne cause.
                            </h2>

                            <p>
                                De nombreux partenaires fidèles nous soutiennent
                                dans notre action et nous permettent d'aller
                                toujours plus loin. Un énorme MERCI à eux sans
                                qui nous ne serions rien!
                            </p>
                        </div>
                        <div className="why-trail-last">
                            <h2>
                                <i className="fa-solid fa-person-running"></i>
                                Des coureurs et des marcheurs.
                            </h2>

                            <p>
                                Vous êtes de plus en plus nombreux à venir
                                tester votre nature au travers des différentes
                                courses et marches proposées. Alors petits et
                                grands, n'hésitez-pas, nous vous attendons
                                encore nombreux cette année.
                            </p>
                        </div>
                    </div>
                    <div
                        className="why-trail-right"
                        data-aos="fade-left"
                        data-aos-offset="300"
                    >
                        <h2>Instant challenge!</h2>
                        <img
                            src="./assets/img/moveformuco.jpg"
                            alt="move for muco"
                        />
                    </div>
                </section>
                <section className="container-section">
                    <div
                        className="content-register-left"
                        data-aos="fade-right"
                        data-aos-offset="300"
                    >
                        <img
                            src="./assets/img/Benevolat.webp"
                            alt="muco bénévolat"
                        />
                    </div>
                    <div
                        className="content-register-right"
                        data-aos="fade-left"
                        data-aos-offset="300"
                    >
                        <h2>Qui veut participer?</h2>
                        <p>4 bonnes raisons de nous rejoindre</p>
                        <ul>
                            <li>
                                <i className="fa-regular fa-circle-check"></i>
                                Petits et grands coureurs, venez tester votre
                                nature.
                            </li>
                            <li>
                                <i className="fa-regular fa-circle-check"></i>
                                Marcheurs et randonneurs, baladez-vous en Pays
                                de Vitré.
                            </li>
                            <li>
                                <i className="fa-regular fa-circle-check"></i>
                                Restaurez-vous sur place après l’effort.
                            </li>
                            <li>
                                <i className="fa-regular fa-circle-check"></i>
                                Faites un don pour lutter contre la maladie.
                            </li>
                        </ul>

                        <div className="container-btn">
                            <NavLink to="/inscriptions">
                                <button className="btn btn-1">
                                    <i className="fa-solid fa-file-pen"></i>
                                    Inscriptions
                                </button>
                            </NavLink>
                            <a
                                href="./assets/documents/tract2021Muco.pdf"
                                target="_blank"
                                download="tract2021Muco.pdf"
                            >
                                <button className="btn btn-2">
                                    <i className="fa-solid fa-circle-dollar-to-slot"></i>
                                    Faire un don
                                </button>
                            </a>
                        </div>
                        <em>
                            *Pour faire un don, remplissez-le formulaire du
                            flyer. Retourner-le nous le jour même du Trail Muco.
                        </em>                        
                    </div>
                </section>
                <Numbers/>
            </div>
            <Sponsors/>
        </div>
    );
};

export default Home;
