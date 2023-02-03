import React from 'react';

const Hero = () => {
    return (
        <section className="hero-section section">
            <div className="container hero-container">
                <div className="information-div">
                    <h3 className="hero-subtitle">EDLIGHT DIGITAL <div className="line"></div></h3>
                    <h1 className="main-title hero-title">ПОКОЛЕНИЕ ТЕХНОКРАТОВ</h1>
                    
                    <a className="show-more-button" href="#past-events-section-id">
                        <p className="past-events-link">Прошедшие мероприятия</p>
                    </a>
                </div>
                <div className="animation-div"> 
                    <canvas className="webgl"></canvas>
                </div>
            </div>
        </section>
    );
};

export default Hero;