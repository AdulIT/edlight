import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar">
            <a className="navbar-item hover-underline-animation" href="#about-section-id">О НАС</a>
            <a className="navbar-item hover-underline-animation" href="#services-section-id">СЕРВИСЫ</a>
            <a className="navbar-item hover-underline-animation" href="#team-section-id">КОМАНДА</a>
            <Link className="navbar-item hover-underline-animation" to="/infomatrics">Infomatrics</Link>
        </nav>
    )
}

export default Navbar