import React from 'react';
import servicesData from '../../data/servicesData';
import ServiceItem from '../ServiceItem/ServiceItem';

const Services = () => {
    // const accordionBtn = useRef(null)
    // // const accordionContent = useRef([])
    // // const servicesContent = useRef(null) 

    // const accordionToggle = () =>
    // {
    //     const accordionCurrent = accordionBtn.current

    //     const accordionContent = accordionCurrent.parentElement.nextElementSibling
    //     accordionCurrent.classList.toggle("accordion__button--active")
    //     const servicesContent = accordionCurrent.parentElement
        
    //     if (accordionCurrent.classList.contains("accordion__button--active"))
    //     {
    //         accordionContent.style.maxHeight = accordionContent.scrollHeight +  "px"
    //         servicesContent.classList.add("services-list-item--active")
    //         servicesContent.classList.remove("services-list-item--closed")
    //     }
    //     else
    //     {
    //         accordionContent.style.maxHeight = 0
    //         servicesContent.classList.remove("services-list-item--active")
    //         servicesContent.classList.add("services-list-item--closed")
    //     }
    // }

    const servicesComponents = servicesData.map((item, i) =>
    {
        return (
            <ServiceItem
                key={i}
                title={item.title}
                src={item.imageUrl}
                className={item.className}
            />
        )
    })

    return (
        <section className="services-section section" id="services-section-id">
            <div className="services-container">
                <h1 className="main-title services-title">Сервисы</h1>
                <div className="services-section-subtitle">
                    <img src="../assets/img/services-flag.png" alt="" />
                    <h4 className="services-section-subtitle-text">Области в которых мы обучаем</h4>
                    <img src="../assets/img/services-flag.png" alt="" />
                </div>     
                <ul className="services-list">
                    { servicesComponents }
                </ul>
            </div>
        </section>
    );
};

export default Services;