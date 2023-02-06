import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../UI/Navbar/Navbar'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="menu-overlay">
                    <Link to="/main">
                        <img className="logo" src="../assets/img/logo.png" alt="logo" />
                    </Link>
                    <Navbar />
                    <button className="video-button" id="promoButton"></button>
                    <input className="checkbox" type="checkbox" name="" id="" />
                    <div className="hamburger-lines">
                        <span className="linee line1"></span>
                        <span className="linee line2"></span>
                        <span className="linee line3"></span>
                    </div>

                    <nav className="menu-items">
                        <li className="menu-item"><Link to="#about-section-id">О нас</Link></li>
                        <li className="menu-item"><Link to="#team-section-id">Команда</Link></li>
                        <li className="menu-item"><Link to="#services-section-id">Сервисы</Link></li>
                        <li className="menu-item"><Link to="/infomatrics">Infomatrics</Link></li>
                    </nav>

                    <div className="modal" id="promoModal">
                        <span className="close">&times;</span>
                        <iframe width="1280" height="720" src="https://www.youtube.com/embed/kpW9JcWxKq0" title="What is the Fourth Industrial Revolution?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        
        </header>
    )
}

export default Header