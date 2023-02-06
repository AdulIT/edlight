import React from 'react';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import PastEvents from '../components/PastEvents/PastEvents';
import Services from '../components/Services/Services';
import Team from '../components/Team/Team';

const Main = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <div className="divider div-transparent div-arrow-down"></div>
                <PastEvents />
                <Team />
            </main>
            <Footer />
        </>
    );
};

export default Main;