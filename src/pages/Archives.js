import React from 'react';
import Navigation from '../components/Navigation';
import Sponsors from '../components/Sponsors';

const Archives = () => {
    return (
        <div>
            <div>
                <Navigation />
                <div className="container-title">
                    <h2>Archives</h2>
                </div>
                <div className="container-section-archive">
                    <p>Cette rubrique est en cours de création !</p>
                    <div id="robot">
                        <div class="head"></div>
                        <div class="arm l">
                            <div>
                                <div></div>
                            </div>
                        </div>
                        <div class="leg l">
                            <div>
                                <div></div>
                            </div>
                        </div>
                        <div class="leg r">
                            <div>
                                <div></div>
                            </div>
                        </div>
                        <div class="arm r">
                            <div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div class="shadow"></div>
                   <div className="end"></div>
                </div>

                <Sponsors />
            </div>
        </div>
    );
};

export default Archives;
