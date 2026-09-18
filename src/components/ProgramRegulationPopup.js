import React, { useState } from 'react';

const STORAGE_KEY = 'trailMucoProgramRegulationSeen';

const ProgramRegulationPopup = () => {
    const [isVisible, setIsVisible] = useState(() => {
        try {
            return window.localStorage.getItem(STORAGE_KEY) !== 'true';
        } catch {
            return true;
        }
    });

    const closePopup = () => {
        try {
            window.localStorage.setItem(STORAGE_KEY, 'true');
        } catch {
            // The notification can still be closed if browser storage is unavailable.
        }

        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div
            className="program-regulation-popup"
            role="dialog"
            aria-modal="true"
            aria-labelledby="program-regulation-title"
        >
            <div className="program-regulation-popup__content">
                <button
                    className="program-regulation-popup__close"
                    type="button"
                    onClick={closePopup}
                    aria-label="Fermer l'alerte"
                >
                    <span aria-hidden="true">×</span>
                </button>
                <div className="program-regulation-popup__icon" aria-hidden="true">
                    !
                </div>
                <h2 id="program-regulation-title">Attention</h2>
                <p>
                    <strong>Mise à jour du règlement — Article 2</strong>
                </p>
                <p>
                    Pour participer à l’une des épreuves chronométrées, l’âge minimum est fixé à 16 ans révolus le jour de l’épreuve.
                </p>
                <p>
                    Pour rappel : les Cadets (16-17 ans), distance maximale 15 km ; les Juniors (18-19 ans), distance maximale 25 km ; les Espoirs, les Seniors et les Masters, distance libre.
                </p>
                <p>
                    Le dénivelé positif pris en compte dans le calcul de la distance d’effort est de 1 km pour 100 m de dénivelé positif.
                </p>
                <p>
                    Tous les concurrents de moins de 18 ans devront présenter, lors de leur inscription, une autorisation parentale.
                </p>
            </div>
        </div>
    );
};

export default ProgramRegulationPopup;
