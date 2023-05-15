import React from 'react';
import Navigation from '../components/Navigation';
import Sponsors from '../components/Sponsors';

const Contact = () => {
    return (
        <div>
            <Navigation />
            <div className="container-title">
                <h2>Nous contacter</h2>
            </div>
            <div className="container-section-contact">
                <div className="why-trail-left contact">
                    <p>
                        L'ensemble de l'équipe organisatrice est à votre
                        disposition.
                    </p>
                    <strong>
                        Pour tout renseignement, inscription ou encore demande
                        de sponsoring cliquez-sur le bouton si dessous afin
                        d'envoyer un e-mail, nous vous répondrons dès que
                        possible.
                    </strong>
                    <a href="mailto:contact@trailmuco.fr">
                        <button className="btn mail">Envoyer un e-mail</button>
                    </a>
                    <em>
                        Un formulaire de contact sera prochainement mis en
                        place.
                    </em>
                </div>
                <div className="contact-right">
                    <img
                        src="../assets/img/assemblée.jpg"
                        alt="photos des organisateurs."
                    />
                </div>
            </div>
            <Sponsors />
        </div>
    );
};

export default Contact;
