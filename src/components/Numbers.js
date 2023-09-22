import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

function Numbers() {
    const [animateCountUp, setAnimateCountUp] = useState(false);
    const [playOne, setPlayOne] = useState(false);

    useEffect(() => {
        const numbersContainer = document.querySelector(
            '.in-numbers-container'
        );
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    const classList = mutation.target.classList;
                    if (classList.contains('aos-animate')) {
                        setAnimateCountUp(true);
                    } else {
                        setAnimateCountUp(false);
                    }
                }
            });
        });

        observer.observe(numbersContainer, { attributes: true });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className="in-numbers-container" data-aos="fade-left">
            <div className="in-number-left">
                <i className="fa-solid fa-eye"></i>
                {animateCountUp && !playOne ? (
                    <CountUp
                        start={0}
                        end={17}
                        duration={8}
                        onEnd={() => {
                            setPlayOne(true);
                        }}
                    ></CountUp>
                ) : (
                    <span>17</span>
                )}

                <p>édition</p>
            </div>
            <div className="in-number-center">
                <i className="fa-solid fa-chart-line"></i>
                {animateCountUp && !playOne ? (
                    <CountUp
                        start={0}
                        end={299191}
                        separator=" "
                        suffix=" €"
                        duration={6}
                        onEnd={() => {
                            setPlayOne(true);
                        }}
                    ></CountUp>
                ) : (
                    <span>299 191€</span>
                )}
                <p>reversés à la muco</p>
            </div>
            <div className="in-number-right">
                <i className="fa-solid fa-user-group"></i>
                {animateCountUp && !playOne ? (
                    <CountUp
                        start={0}
                        end={1001}
                        separator=" "
                        duration={6}
                    ></CountUp>
                ) : (
                    <span>1001</span>
                )}
                <p>participants en 2022</p>
            </div>
        </div>
    );
}

export default Numbers;
