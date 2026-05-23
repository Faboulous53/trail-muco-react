import React, { useEffect, useState } from 'react';

const FIREWORKS = [
    { x: '6vw', y: '18dvh', delay: '0s', scale: 0.9 },
    { x: '14vw', y: '36dvh', delay: '0.08s', scale: 0.72 },
    { x: '23vw', y: '15dvh', delay: '0.16s', scale: 1.05 },
    { x: '32vw', y: '46dvh', delay: '0.24s', scale: 0.78 },
    { x: '42vw', y: '22dvh', delay: '0.32s', scale: 0.95 },
    { x: '52vw', y: '12dvh', delay: '0.4s', scale: 1.12 },
    { x: '62vw', y: '34dvh', delay: '0.48s', scale: 0.75 },
    { x: '72vw', y: '16dvh', delay: '0.56s', scale: 1 },
    { x: '84vw', y: '28dvh', delay: '0.64s', scale: 0.86 },
    { x: '94vw', y: '42dvh', delay: '0.72s', scale: 0.76 },
    { x: '9vw', y: '58dvh', delay: '0.8s', scale: 0.82 },
    { x: '18vw', y: '74dvh', delay: '0.88s', scale: 1.08 },
    { x: '28vw', y: '62dvh', delay: '0.96s', scale: 0.72 },
    { x: '38vw', y: '80dvh', delay: '1.04s', scale: 0.94 },
    { x: '49vw', y: '54dvh', delay: '1.12s', scale: 1.14 },
    { x: '58vw', y: '76dvh', delay: '1.2s', scale: 0.78 },
    { x: '68vw', y: '58dvh', delay: '1.28s', scale: 0.98 },
    { x: '78vw', y: '72dvh', delay: '1.36s', scale: 0.86 },
    { x: '88vw', y: '60dvh', delay: '1.44s', scale: 1.04 },
    { x: '96vw', y: '78dvh', delay: '1.52s', scale: 0.7 },
    { x: '12vw', y: '24dvh', delay: '1.6s', scale: 0.78 },
    { x: '26vw', y: '30dvh', delay: '1.68s', scale: 0.88 },
    { x: '36vw', y: '12dvh', delay: '1.76s', scale: 0.74 },
    { x: '47vw', y: '36dvh', delay: '1.84s', scale: 1 },
    { x: '57vw', y: '20dvh', delay: '1.92s', scale: 0.8 },
    { x: '68vw', y: '42dvh', delay: '2s', scale: 0.9 },
    { x: '80vw', y: '12dvh', delay: '2.08s', scale: 0.78 },
    { x: '90vw', y: '34dvh', delay: '2.16s', scale: 0.92 },
    { x: '5vw', y: '82dvh', delay: '2.24s', scale: 0.7 },
    { x: '22vw', y: '88dvh', delay: '2.32s', scale: 0.82 },
    { x: '34vw', y: '68dvh', delay: '2.4s', scale: 0.72 },
    { x: '45vw', y: '88dvh', delay: '2.48s', scale: 0.88 },
    { x: '56vw', y: '64dvh', delay: '2.56s', scale: 0.76 },
    { x: '70vw', y: '86dvh', delay: '2.64s', scale: 0.98 },
    { x: '82vw', y: '82dvh', delay: '2.72s', scale: 0.74 },
    { x: '94vw', y: '66dvh', delay: '2.8s', scale: 0.84 },
];

const SPARKS = Array.from({ length: 40 }, (_, index) => index);

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
                            '--firework-scale': firework.scale,
                            animationDelay: firework.delay,
                        }}
                    >
                        <div className="firework-burst">
                            {SPARKS.map((spark) => (
                                <span
                                    key={spark}
                                    style={{ transform: `rotate(${spark * 9}deg)` }}
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
