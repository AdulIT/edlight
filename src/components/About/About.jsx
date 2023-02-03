import React from 'react';

const About = () => {
    return (
        <section className="about-section section" id="about-section-id">
            <div className="container">
                <h1 className="main-title about-title">О нас</h1>
                <div className="about-section-content">
                    <div className="about-section-highlights-div">
                        <img  alt="" className="highlights-photo" src="../img/about-photo.png" />
                    </div>
                    <div className="about-section-info">
                        <p className="about-description first-description">
                            Хакатон - наиболее эффективный метод качественно и быстро научить основам программирования, работы с чипами, и программами. 
                        </p>
                        <p className="about-description">
                            В результате ученик сделает проект/прототип. Научится мыслить критически, использовать рационально время и презентовать свой проект.
                        </p>
                        <h3 className="community-subtitle">Кроме того мы занимаемся</h3>
                        <ul className="community-list">
                            <li className="community-list-item"><p className="about-section-community-we">Платформы &nbsp;</p> для образования</li>
                            <li className="community-list-item"><p className="about-section-community-we">Проведение &nbsp;</p> IT олимпиад республиканского и междунродного масштаба</li>
                            <li className="community-list-item"><p className="about-section-community-we">Онлайн/гибридное &nbsp;</p>образование</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;