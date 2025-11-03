import React from 'react';
import './CityBackground.css';
import cityImage from './assets/bg-img.png';

const CityBackground: React.FC = () => {
    return (
        <div className="city-container">
            <img
                src={cityImage}
                alt="Sfondo città neon"
                className="city-image"
            />
        </div>
    );
};

export default CityBackground;