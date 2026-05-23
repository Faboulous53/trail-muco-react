import React, { useEffect, useState } from 'react';

const FIREWORKS = [
    { left: '18%', top: '22%', delay: '0s' },
    { left: '78%', top: '20%', delay: '0.35s' },
    { left: '28%', top: '70%', delay: '0.7s' },
    { left: '70%', top: '68%', delay: '1.05s' },
    { left: '50%', top: '32%', delay: '1.4s' },
];

const SPARKS = Array.from({ length: 16 }, (_, index) => index);

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
                        key={`${firework.left}-${firework.top}`}
                        style={{
                            left: firework.left,
                            top: firework.top,
                            animationDelay: firework.delay,
                        }}
                    >
                        {SPARKS.map((spark) => (
                            <span
                                key={spark}
                                style={{ transform: `rotate(${spark * 22.5}deg)` }}
                            />
                        ))}
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
