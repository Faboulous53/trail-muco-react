import React, { useEffect, useState } from 'react';

const FIREWORKS = [
    { x: '10vw', y: '18dvh', delay: '0s' },
    { x: '24vw', y: '32dvh', delay: '0.12s' },
    { x: '42vw', y: '15dvh', delay: '0.24s' },
    { x: '58vw', y: '30dvh', delay: '0.36s' },
    { x: '82vw', y: '20dvh', delay: '0.48s' },
    { x: '92vw', y: '42dvh', delay: '0.6s' },
    { x: '16vw', y: '58dvh', delay: '0.72s' },
    { x: '34vw', y: '72dvh', delay: '0.84s' },
    { x: '50vw', y: '46dvh', delay: '0.96s' },
    { x: '68vw', y: '66dvh', delay: '1.08s' },
    { x: '84vw', y: '78dvh', delay: '1.2s' },
    { x: '6vw', y: '76dvh', delay: '1.32s' },
    { x: '30vw', y: '20dvh', delay: '1.44s' },
    { x: '72vw', y: '14dvh', delay: '1.56s' },
    { x: '46vw', y: '82dvh', delay: '1.68s' },
    { x: '64vw', y: '52dvh', delay: '1.8s' },
    { x: '20vw', y: '42dvh', delay: '1.92s' },
    { x: '78vw', y: '58dvh', delay: '2.04s' },
];

const SPARKS = Array.from({ length: 24 }, (_, index) => index);

const HomeIntroPopup = () => {
    const [isVisible, setIsVisible] = useState(() => {
        if (typeof window === 'undefined') {
            return false;
        }

        return localStorage.getItem('trailMucoIntroSeen') !== 'true';
    });
    const [isLeaving, setIsLeaving] = useState(false);

    useEffect(() => {
        if (!isVisible) {
            return undefined;
        }

        const leaveTimer = setTimeout(() => {
            localStorage.setItem('trailMucoIntroSeen', 'true');
            setIsLeaving(true);
        }, 5000);

        const hideTimer = setTimeout(() => {
            setIsVisible(false);
        }, 5800);

        return () => {
            clearTimeout(leaveTimer);
            clearTimeout(hideTimer);
        };
    }, [isVisible]);

    if (!isVisible) {
        return null;
    }

    return (
        <div
            className={`home-intro-popup${isLeaving ? ' is-leaving' : ''}`}
            aria-live="polite"
        >
            <div className="home-intro-fireworks" aria-hidden="true">
                {FIREWORKS.map((firework) => (
                    <div
                        className="firework"
                        key={`${firework.x}-${firework.y}`}
                        style={{
                            '--firework-x': firework.x,
                            '--firework-y': firework.y,
                            animationDelay: firework.delay,
                        }}
                    >
                        <div className="firework-burst">
                            {SPARKS.map((spark) => (
                                <span
                                    key={spark}
                                    style={{ transform: `rotate(${spark * 15}deg)` }}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="home-intro-message">
                <p>
                    Le Trail muco fête sa 20 ème édition en 2026!!
                    <br />
                    Venez nombreux!
                </p>
            </div>
        </div>
    );
};

export default HomeIntroPopup;
