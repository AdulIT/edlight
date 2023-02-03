import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="navbar-item hover-underline-animation" to="#about-section-id">О НАС</Link>
            <Link className="navbar-item hover-underline-animation" to="#services-section-id">СЕРВИСЫ</Link>
            <Link className="navbar-item hover-underline-animation" to="#team-section-id">КОМАНДА</Link>
            <Link className="navbar-item hover-underline-animation" to="/infomatrics">Infomatrics</Link>
        </nav>
    )
}

export default Navbar