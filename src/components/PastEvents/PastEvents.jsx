import React, { useEffect } from 'react';

const PastEvents = () => {

    useEffect(() =>
    {
        const items = document.querySelectorAll(".timeline-section li");
  
        function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        if(window.innerWidth >= 560){
            return(
                rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight  || document.documentElement.clientHeight ) &&
            rect.right <= (window.innerWidth  || document.documentElement.clientWidth )
            );
        }
        else {
            return (
                true
            );
        }
        }
    
        function slideIn() {
        for (let i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
            items[i].classList.add("slide-in");
            } else {
            items[i].classList.remove("slide-in");
            }
        }
        }
    
        window.addEventListener("load", slideIn);
        window.addEventListener("scroll", slideIn);
        window.addEventListener("resize", slideIn);
    }, [])

    return (
        <section id="past-events-section-id" className="past-events-section section">
            <div id="myHeader">
                <h1 className="past-events-title">Прошедшие события</h1>
            </div>
            <div className="timeline-section">
                <ul className="timeline">
                    <li className="timeline-item">
                        <div className="hackathon">
                            <time>2021 Май</time><p className="event-description">Мы начали вести курсы по виртуальной реальности!</p>
                        </div>
                    </li>
                    <li className="timeline-item">
                        <div className="hackathon">
                            <time>2022 Январь</time>
                            <p className="event-description">Хакатон iQanat на базе IT BIL Burabay:</p> 
                            <p className="event-description video-pointer">&#8595; &#8595; &#8595;</p>
                            <button id="myBtn1" className="myBtn" href="">
                                <img width="195px" height="127px" className="img-hackathon img-hackathon1" src="../assets/img/action.png" alt="" />
                            </button>
                            <a className="video-link" href="https://www.youtube-nocookie.com/embed/OMBDXNNItr4">
                                <img className="img-hackathon" src="../assets/img/action.png" alt="" />
                            </a>
                        </div>
                    </li>
                    <li className="timeline-item">
                        <div className="hackathon">
                            <time>2022 Февраль</time>
                            <p className="event-description">IQanat хакатон по программе Intensive program в Шымкенте:</p>
                            <p className="event-description video-pointer">&#8595; &#8595; &#8595;</p>
                            <button className="myBtn" id="myBtn" href="">
                                <img className="img-hackathon rotated" src="../assets/img/hackathon-pic1.png" alt="hackathon-1" />
                            </button>
                            <a className="video-link" href="https://www.youtube-nocookie.com/embed/OMBDXNNItr4">
                                <img className="img-hackathon rotated" src="../assets/img/hackathon-pic1.png" alt="hackathon-1" />    
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="hackathon">
                            <time>2023 Январь</time>
                            <p className="event-description">Мы начали вести курсы по разработке сайтов!</p> 
                        </div>
                    </li>
                    <li>
                        <div className="hackathon">
                            <time>2023 Январь</time>
                            <p className="event-description">Был проведен хакатон в Боровом по программе iQanat Intensive Program!</p> 
                        </div>
                    </li>
                </ul>
                <div id="myModal1" className="modal">
                    <span className="close">&times;</span>
                    {/* <!-- Modal content --> */}
                    <iframe className="iQanat1-video" src="https://www.youtube.com/embed/OMBDXNNItr4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div id="myModal" className="modal">
                    <span className="close">&times;</span>
                    {/* <!-- Modal content --> */}
                    <iframe className="iQanat1-video" src="https://www.youtube.com/embed/O2u3Z7R9UXE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    
                
                </div>
            </div>
        </section>
    );
};

export default PastEvents;