import React, { useState } from 'react';
import sponsorsData from '../data/sponsorsData';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Sponsors = () => {
    const [actualSlide, setActualSlide] = useState(
        parseInt(localStorage.getItem('currentIndex'), 10) || 0
    );

    const splideRef = React.useRef(); // créer une référence pour accéder au composant Splide

    const handleSlideMoved = () => {
        const index = splideRef.current.splide.index;
        localStorage.setItem('currentIndex', JSON.stringify(index));
        setActualSlide(JSON.parse(localStorage.getItem('currentIndex')));
    };

    return (
        <footer className="container-sponsors">
            <div className="sponsors">
                <Splide
                    aria-label="My Favorite Images"
                    options={{
                        type: 'loop',
                        fixedWidth: '210px',
                        perMove: 1,
                        gap: '8px',
                        autoplay: true,
                        interval: 1000,
                        arrows: false,
                        pagination: false,
                        rewind: false,
                        breakpoints: {
                            800: {
                                fixedWidth: '160px',
                                gap: '6px',
                            },
                            420: {
                                fixedWidth: '125px',
                                gap: '4px',
                            },
                        },
                        // Avant fonction math.random la valeur était de 0
                        start: `${
                            actualSlide !== undefined
                                ? actualSlide
                                : Math.random() * (sponsorsData.length - 0) + 0
                        }`,
                    }}
                    onMoved={handleSlideMoved}
                    ref={splideRef}
                >
                    {sponsorsData.map((sponsor) => (
                        <SplideSlide key={sponsor.id}>
                            <a
                                href={`${sponsor.link}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={`./assets/img/sponsors/${sponsor.img}`}
                                    alt={`${sponsor.name}`}
                                />
                            </a>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </footer>
    );
};

export default Sponsors;
