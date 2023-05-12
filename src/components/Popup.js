import React, { useEffect, useState } from 'react';

const Popup = () => {
    const [visiblePopup, setVisiblePopup] = useState(
        JSON.parse(localStorage.getItem('popupVisible')) === false
            ? false
            : true
    );

    useEffect(() => {
        const popup = document.querySelector('#popup');
        const validPopup = document.querySelector('#validPopup');
        const deletePopup = () => {
            if (visiblePopup) {
                popup.style.transition = '1s ease-in-out';
                popup.style.opacity = '0';
                localStorage.setItem('popupVisible', JSON.stringify(false));
                setVisiblePopup(false);
            }
        };
        if (!visiblePopup) {
            popup.style.visibility = 'hidden';
        }
        validPopup.addEventListener('click', deletePopup);

        return () => {
            validPopup.removeEventListener('click', deletePopup);
        };
    }, [visiblePopup]);

    return (
        <div className="back-popup" id="popup">
            <div className="popup">
                <h4>Nouvelle Version du site Trail-Muco</h4>
                <p>
                    Il s'agit actuellement d'une version d'essai.
                    <br />
                    En cours de développement.
                </p>
                <p>Bonne visite!</p>
                <button id="validPopup">Ok</button>
            </div>
        </div>
    );
};

export default Popup;
