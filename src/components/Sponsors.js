import React, { useState } from 'react';
import sponsorsData from '../data/sponsorsData';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
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
                        autoWidth: true,
                        perMove: 1,
                        gap: '2px',
                        autoScroll: {
                            speed: 0.6,
                            pauseOnHover: false,
                            pauseOnFocus: false,
                        },
                        arrows: false,
                        pagination: false,
                        rewind: false,
                        breakpoints: {
                            800: {
                                gap: '2px',
                            },
                            620: {
                                gap: '0px',
                            },
                            420: {
                                gap: '0px',
                            },
                        },
                        // Avant fonction math.random la valeur était de 0
                        start: `${
                            actualSlide !== undefined
                                ? actualSlide
                                : Math.random() * (sponsorsData.length - 0) + 0
                        }`,
                    }}
                    extensions={{ AutoScroll }}
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
