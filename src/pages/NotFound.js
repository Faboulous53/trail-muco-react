import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Sponsors from '../components/Sponsors';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate('/');
        }, 5000);
        return () => clearTimeout(timeoutId);
    }, [navigate]);
    return (
        <div>
            <Navigation />
            <div className="not-found">
                <h3>Oupsss!!</h3>
                <p>
                    La page que vous recherchez n'existe pas, redirection
                    automatique vers l'accueil dans 5 secondes.{' '}
                </p>
            </div>
            <Sponsors />
        </div>
    );
};

export default NotFound;
