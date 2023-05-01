import React, { useState, useEffect } from 'react';
import sponsorsData from '../data/sponsorsData';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { NavLink } from 'react-router-dom';

const Sponsors = () => {
    const [widthWindow, setWidthWindow] = useState(6);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1800) {
                setWidthWindow(5);
            } if (window.innerWidth < 1700) {
                setWidthWindow(4);
            } if (window.innerWidth < 800) {
                setWidthWindow(3);
            } if (window.innerWidth > 1800) {
                setWidthWindow(6);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="container-sponsors" data-aos="fade-up">
            <h2>Nos Sponsors:</h2>
            <Splide
                aria-label="My Favorite Images"
                options={{
                    perPage: `${widthWindow}`,
                    gap: '5px',
                    autoplay: true,
                    interval: 3000,
                    rewind: true,
                    arrows: false
                }}
            >
                {sponsorsData.map((sponsor) => (
                    <SplideSlide key={sponsor.id}>
                        <a href={`${sponsor.link}`} target="_blank" rel="noreferrer">
                            <img
                                src={`./assets/img/sponsors/${sponsor.img}`}
                                alt={`${sponsor.name}`}
                            />
                        </a>
                    </SplideSlide>
                ))}
            </Splide>
            <div className="container-sponsors-back">
                <NavLink to="/contact">
                <button className='btn1'>Sponsoriser</button>
                </NavLink>
            </div>
        </div>
    );
};

export default Sponsors;
