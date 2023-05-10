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
                </div>
            ))}
        </div>
    );
};

export default CardRaces;
