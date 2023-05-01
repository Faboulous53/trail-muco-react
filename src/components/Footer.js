import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <p>
                    © COPYRIGHT TRAIL MUCO - PAYS DE VITRÉ. TOUS DROITS
                    RÉSERVÉS.
                </p>
                <p>
                    Design et développement bénévole par{' '}
                    <a
                        href="https://delpierre-fabien.fr/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Delpierre Fabien
                    </a>
                </p>
            </div>
            <div className="footer-right">
                <p>Retrouvez nous sur</p>
                <a
                        href="https://www.facebook.com/TrailMucoDuPaysDeVitre/?locale=fr_FR"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa-brands fa-facebook"></i>
                    </a>
            </div>
        </div>
    );
};

export default Footer;
