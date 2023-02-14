import React from 'react'

const AccordionContent = (props) => {
    const accordionTexts = props.accordionContent.texts.map((text, i) =>
        {
            return (
                    <p key={i} className="accordion-content-text">
                        {text}
                        {/* console.log({text}) */}
                    </p>
            )
        })

    const accordionImages = props.accordionContent.images.map((img, i) =>
        {
            return (
                <img key={i} src={img} alt="accordion-img" className="img-roll-img" />
            )
        })

    return (
        <>
            <div className="accordion__content">
                <h1 className="main-title accordion-title">{ props.title }</h1>
                {/* <p className="accordion-content-text"> */}
                    { accordionTexts }
                {/* </p> */}
                <h2 className="projects"> { props.projectsTitle } </h2>
                <div className="img-roll">
                    { accordionImages }
                    {/* <img src="" alt="" className="img-roll-img" /> */}
                    {/* <img src="" alt="" className="img-roll-img" />
                    <img src="" alt="" className="img-roll-img" /> */}
                </div>
            </div>
        </>
    )
}

export default AccordionContent;