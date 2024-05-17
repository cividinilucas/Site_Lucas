import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHtml5, faJava, faReact} from "@fortawesome/free-brands-svg-icons";
import {faSquareCaretLeft, faCaretLeft} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function AboutMe() {
    const [showInfo, toggleShowInfo] = useState(false);

    return (
        <section>
            <h1 className="link">
                <Link to={"/"}> <FontAwesomeIcon icon={faCaretLeft}/></Link>
            </h1>
            <h1 className="aboutme" onClick={() => toggleShowInfo(!showInfo)}>
                {showInfo ? "Show less" : "Show more about me"}
            </h1>
            <div className={`aboutme-content ${showInfo ? 'show' : ''}`}>
                <p>Hi! My name is Lucas, and I'm studying systems development.
                    <br />
                    <br />
                    Currently learning:
                    <br />
                    <p className="icon">
                        <FontAwesomeIcon className="animate__animated animate__pulse animate__infinite animate__fast" icon={faReact}/>
                        <FontAwesomeIcon className="animate__animated animate__pulse animate__infinite animate__fast" icon={faJava}/>
                        <FontAwesomeIcon className="animate__animated animate__pulse animate__infinite animate__fast" icon={faHtml5}/>
                    </p>
                </p> 
            </div>
        </section>
    );
}

export default AboutMe;