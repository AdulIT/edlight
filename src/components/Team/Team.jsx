import React from 'react';

const Team = () => {
    return (
        <div className="team-section section" id="team-section-id">
            <div className="container">
                <div className="team-title-content">
                    <div className="weird-circles margin-circle"></div>
                    <div className="weird-circles"></div>
                    <h1 className="main-title team-title">Команда</h1>
                    <h5 className="team-subtitle">Профессионалы в своей области</h5>
                    <div className="weird-circles margin-circle"></div>
                    <div className="weird-circles"></div>
                </div>
                <ul className="team-list">
                    <li className="team-list-item">
                        <div className="trainer-avatar">
                            <img className="team-list-item-avatar" src="../assets/img/trainer-photo.png" alt=""/>
                            <div className="trainer-avatar-content">
                                <div className="trainer-avatar-text">
                                    <h4 className="team-list-item-name">Akhyn Zhaksylyk</h4>
                                    <h5 className="team-list-item-field">Arduino trainer</h5>
                                </div>
                            </div>
                        </div>
                        <p className="team-list-item-quote">&quot;All things are possible because anything can be learned&quot;</p>
                        
                    </li>
                    
                    <li className="team-list-item">
                        <div className="trainer-avatar">
                            <img className="team-list-item-avatar" src="../assets/img/trainer-photo-5.png" alt=""/>
                            <div className="trainer-avatar-content">
                                <div className="trainer-avatar-text">
                                    <h4 className="team-list-item-name">Zholgeldiev Zhanbolat</h4>
                                    <h5 className="team-list-item-field">Arduino trainer</h5>
                                </div>
                            </div>
                        </div>
                        <p className="team-list-item-quote">&quot;Образование – основа общества&quot;</p>
                        
                    </li>
                    <li className="team-list-item">
                        <div className="trainer-avatar">
                            <img className="team-list-item-avatar" src="../assets/img/trainer-photo.png" alt=""/>
                            <div className="trainer-avatar-content">
                                <div className="trainer-avatar-text">
                                    <h4 className="team-list-item-name">Kulboldin Daniyar</h4>
                                    <h5 className="team-list-item-field">Data Science trainer</h5>
                                </div>
                            </div>
                        </div>
                        <p className="team-list-item-quote">&quot;Инвестиции в знания окупаются с наибольшей выгодой&quot;</p>
                    </li>
                    <li className="team-list-item">
                        <div className="trainer-avatar">
                            <img className="team-list-item-avatar" src="../assets/img/trainer-photo-2.png" alt=""/>
                            <div className="trainer-avatar-content">
                                <div className="trainer-avatar-text">
                                    <h4 className="team-list-item-name">Maksat Tulegenov</h4>
                                    <h5 className="team-list-item-field">VR trainer</h5>
                                </div>
                            </div>
                        </div>
                        <p className="team-list-item-quote">&quot;Корни образования горьки, но плоды сладки&quot;</p>
                    </li>
                    <li className="team-list-item">
                        <div className="trainer-avatar">
                            <img className="team-list-item-avatar" src="../assets/img/trainer-photo-2.png" alt=""/>
                            <div className="trainer-avatar-content">
                                <div className="trainer-avatar-text">
                                    <h4 className="team-list-item-name">Sakimov Ilyas</h4>
                                    <h5 className="team-list-item-field">Chat-bot trainer</h5>
                                </div>
                            </div>
                        </div>
                        <p className="team-list-item-quote">&quot;Процесс обучения продолжается до того дня, пока вы не окончите жизнь&quot;</p>
                    </li>
                    <li className="team-list-item">
                        <div className="trainer-avatar">
                            <img className="team-list-item-avatar" src="../assets/img/trainer-photo.png" alt=""/>
                            <div className="trainer-avatar-content">
                                <div className="trainer-avatar-text">
                                    <h4 className="team-list-item-name">Myrzatov Murat</h4>
                                    <h5 className="team-list-item-field">Arduino trainer</h5>
                                </div>
                            </div>
                        </div>
                        <p className="team-list-item-quote">&quot;Образование - это не наполнение ведра, а зажигание огня&quot;</p>
                    </li>
                </ul>
                <ul className="team-list-mobile">
                    <li className="mobile-team-list-item">
                        <img className="team-list-item-avatar-mobile" src="../assets/img/trainer-photo.png" alt=""/>
                        <h4 className="team-list-item-name-mobile">Алмаз Алихан</h4>
                        <h5 className="team-list-item-field-mobile">Ардуино тренер</h5>
                    </li>
                    <li className="mobile-team-list-item">
                        <img className="team-list-item-avatar-mobile" src="../assets/img/trainer-photo-2.png" alt=""/>
                        <h4 className="team-list-item-name-mobile">Оспан Жангир</h4>
                        <h5 className="team-list-item-field-mobile">Чат-бот trainer</h5>
                    </li>
                    <li className="mobile-team-list-item">
                        <img className="team-list-item-avatar-mobile" src="../assets/img/trainer-photo-5.png" alt=""/>
                        <h4 className="team-list-item-name-mobile">Akhyn Zhaksylyk</h4>
                        <h5 className="team-list-item-field-mobile">Arduino trainer</h5>
                    </li>
                    <li className="mobile-team-list-item">
                        <img className="team-list-item-avatar-mobile" src="../assets/img/trainer-photo.png" alt=""/>
                        <h4 className="team-list-item-name-mobile">Akhyn Zhaksylyk</h4>
                        <h5 className="team-list-item-field-mobile">Arduino trainer</h5>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Team;