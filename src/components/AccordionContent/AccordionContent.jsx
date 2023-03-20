import React from 'react'

const AccordionContent = (props) => {
    const accordionTexts = props.texts.map((text, i) =>
        {
            return (
                    <p key={i} className="accordion-content-text">
                        {text}
                    </p>
            )
        })

    const accordionImages = props.images.map((img, i) =>
        {
            return (
                <img key={i} src={img} alt="accordion-img" className="img-roll-img" />
            )
        })

    return (
        <>
            <h1 className="main-title accordion-title">{ props.title }</h1>
                { accordionTexts }
            <h2 className="projects"> { props.projectsTitle } </h2>
            <div className="img-roll">
                { accordionImages }
            </div>
        </>
    )
}

export default AccordionContent;