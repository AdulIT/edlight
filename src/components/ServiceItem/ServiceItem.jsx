import React, { useState, useRef } from 'react'
import accordionContentData from '../../data/accordionContentData';
import AccordionContent from '../AccordionContent/AccordionContent';

const ServiceItem = (props) => {
    const accordionBtn = useRef(null)

    const accordionContents = accordionContentData.map((accordionContent, i) =>
    {
        return (
            <AccordionContent
                key={i}
                accordionContent={accordionContent}
            />
        )
    })

    const [isShowed, setIsShowed] = useState(false)

    const toggleButton = () =>
    {
        if (isShowed)
        {
            setIsShowed(false)
        } else
        {
            setIsShowed(true)
        }
        console.log(isShowed)
    }



    // const accordionCurrent = accordionBtn.current

    // const accordionContent = accordionCurrent.parentElement.nextElementSibling
    // accordionCurrent.classList.toggle("accordion__button--active")
    // const servicesContent = accordionCurrent.parentElement
    
    // if (accordionCurrent.classList.contains("accordion__button--active"))
    // {
    //     accordionContent.style.maxHeight = accordionContent.scrollHeight +  "px"
    //     servicesContent.classList.add("services-list-item--active")
    //     servicesContent.classList.remove("services-list-item--closed")
    // }
    // else
    // {
    //     accordionContent.style.maxHeight = 0
    //     servicesContent.classList.remove("services-list-item--active")
    //     servicesContent.classList.add("services-list-item--closed")
    // }

    return (
        <>
            <li
                className={`services-list-item ${props.className} services-list-item--closed`}
                style={{ backgroundImage: `url("${props.src}")` }}
            >
                <h1 className="services-list-heading">{ props.title }</h1>
                <button
                    className="accordion__button services-explore-button"
                    onClick={toggleButton}
                    ref={accordionBtn}
                >
                    узнать
                </button>
            </li>
            { accordionContents }
        </>
    );



};

export default ServiceItem;