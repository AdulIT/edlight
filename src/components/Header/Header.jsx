import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../UI/Navbar/Navbar'
import { useLocation } from 'react-router-dom'


const Header = () => {

    const location = useLocation()
    const refModal = useRef(null)
    const refBtn = useRef(null)
    const refClose = useRef(null)

    useEffect(() =>
    {
        const modalWindows = document.querySelectorAll('.modal')

        window.addEventListener('click', (e) =>
        {
            modalWindows.forEach(modal =>
            {
                if (e.target === modal)
                {
                    modal.style.display = 'none'
                }
                let iframes = document.querySelectorAll('iframe')
                iframes.forEach(iframe =>
                {
                    if (iframe)
                    {
                        let iframeSrc = iframe.src
                        iframe.src =  iframeSrc
                    }
                })
            })
        })
    }, [])

    const playButton = () =>
    {
        refModal.current.style.display = 'flex'
    }

    const closeModal = () =>
    {
        refModal.current.style.display = 'none'

        let iframes = document.querySelectorAll('iframe')
        iframes.forEach(iframe =>
        {
            if (iframe)
            {
                let iframeSrc = iframe.src
                iframe.src =  iframeSrc
            }
        })
    }
    
    return (
        <header className={(location.pathname === '/infomatrics') ? 'header-white' : 'header'}>
            <div className="container">
                <div className="menu-overlay">
                    <Link to="/main">
                        <img className="logo" src="../assets/img/logo.png" alt="logo" />
                    </Link>
                    <Navbar />
                    <button
                        className="video-button"
                        id="promoButton"
                        ref={refBtn}
                        onClick={playButton}
                    >
                    </button>
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

                    <div className="modal" id="promoModal" ref={refModal}>
                        <span
                            className="close"
                            ref={refClose}
                            onClick={closeModal}
                        >
                            &times;
                        </span>
                        <iframe width="1280" height="720" src="https://www.youtube-nocookie.com/embed/kpW9JcWxKq0" title="What is the Fourth Industrial Revolution?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        
        </header>
    )
}

export default Header