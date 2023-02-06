import React from 'react'

const Footer = () => {
    return (
        <footer className="footer section">
            <div className="container footer-container">
                <div className="footer-lists-wrapper">
                    <ul className="contacts-list footer-list">
                        <li className="contacts-list-item footer-list-header"><h1 className="footer-list-heading">Contacts</h1></li>
                        <li className="contacts-list-item">academy@edlight.kz</li>
                        <li className="contacts-list-item">8 (702) 690 27-37</li>
                        <li className="contacts-list-item">Nur-Sultan, Koshkarbaev st 11/2.</li> 
                    </ul>
                    <ul className="courses-list footer-list">
                        <li className="course-list-item footer-list-header"><h1 className="footer-list-heading">Courses</h1></li>
                        <li className="course-list-item"><a href="https://infomatrix.asia/">Infomatrix</a> </li>
                        <li className="course-list-item"><a href="https://edlight.kz/zerekbala/">Zerek Bala</a></li>
                        <li className="course-list-item"><a href="https://edlight.kz/">Olympiad preparation</a></li>
                    </ul>
                    <ul className="events-list footer-list">
                        <li className="events-list-item footer-list-header"><h1 className="footer-list-heading">Socials</h1></li>
                        <li className="events-list-item"><a href="https://www.youtube.com/@edlightacademy8587">Youtube</a></li>
                        <li className="events-list-item"><a href="">Instagram</a></li>
                    </ul>
                </div>
                <p className="copyright">2022 copyright edlight digital. all rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer