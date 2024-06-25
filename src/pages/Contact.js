import React from 'react';
import Navigation from '../components/Navigation';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div>
            <Navigation />
            <div className="container-title long-title">
                <h2>Nous contacter</h2>
            </div>
            <div className="container-section-contact">
                <div className="why-trail-left contact">
                <h2>Vous pouvez nous contacter à l'aide du formulaire d'envoi ci-dessous:</h2>
                    <ContactForm></ContactForm>
                </div>
                <div className="contact-right">
                    <img
                        src="../assets/img/assemblée.jpg"
                        alt="photos des organisateurs."
                    />
                </div>
            </div>
            <Footer />
            <Sponsors />
        </div>
    );
};

export default Contact;
