import React, { useState, useEffect } from 'react';
import sponsorsData from '../data/sponsorsData';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Sponsors = () => {
    const [widthWindow, setWidthWindow] = useState(
        window.innerWidth >= 1800 ? 6 : 3
    );
    const [actualSlide, setActualSlide] = useState(
        parseInt(localStorage.getItem('currentIndex'), 10) || 0
    );

    useEffect(() => {
        const handleResize = () => {
            switch (true) {
                case window.innerWidth < 400:
                    setWidthWindow(2);
                    break;
                case window.innerWidth < 800:
                    setWidthWindow(3);
                    break;
                case window.innerWidth < 1700:
                    setWidthWindow(4);
                    break;
                case window.innerWidth < 1800:
                    setWidthWindow(5);
                    break;
                default:
                    setWidthWindow(6);
                    break;
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [widthWindow]);

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
                        perPage: `${widthWindow}`,
                        gap: '5px',
                        autoplay: true,
                        interval: 3000,
                        rewind: true,
                        arrows: false,
                        start: `${actualSlide !== undefined ? actualSlide : 0}`,
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
