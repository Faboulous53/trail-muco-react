import React from 'react';
import racesData from '../data/racesData';

const CardRaces = () => {
    return (
        <div className="container-program-card">
            {racesData.map((race) => (
                <div className="card" key={race.id}>
                    <h3>{race.name}</h3>
                    <img
                        src={`./assets/img/parcours/${race.img}`}
                        alt={`${race.name}`}
                    />
                    <p>Plus d'informations sur l'horaire de départ et les conditions de participation disponibles prochainement. </p>
                </div>
            ))}
        </div>
    );
};

export default CardRaces;
