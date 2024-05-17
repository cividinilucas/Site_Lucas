import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faJava, faReact, faJs, faGit } from "@fortawesome/free-brands-svg-icons";
import { faSquareCaretLeft, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function AboutMe() {
    const [showAboutMe, toggleShowAboutMe] = useState(false);
    const [showKnow, toggleShowKnow] = useState(false);

    return (
        <section className="about-me">
            <h1 className="link">
                <Link to={"/"}> <FontAwesomeIcon icon={faCaretLeft} /></Link>
            </h1>
            <span className="aboutme animate__animated animate__pulse animate__infinite" onClick={() => toggleShowAboutMe(!showAboutMe)}>
                {showAboutMe ? "Show less" : "Show more about me"}
            </span>
            <div className={`aboutme-content ${showAboutMe ? 'showAboutMe' : ''}`}>
                <p>Hi! My name is Lucas, I'm 21, and I'm studying systems development.
                    <br />
                    <br />
                   I'm graduating from Universidade Paranaense, in the Course
                    <br />
                    System analysis and development. 
                    <br />
                </p>
            </div>

            <span className="knowledge animate__animated animate__pulse animate__infinite" onClick={() => toggleShowKnow(!showKnow)}>
                {showKnow ? "My Knowledge" : "My Knowledge"}
            </span>
            <div className={`knowledge-content ${showKnow ? 'showKnowledge' : ''}`}>
                <p className="icon">
                        <FontAwesomeIcon className="animate__animated animate__pulse animate__infinite animate_fast" icon={faReact} />
                        <FontAwesomeIcon className="animate__animated animate__pulse animate__infinite animate_fast"icon={faJava} />
                        <FontAwesomeIcon className="animate__animated animate__pulse animate__infinite animate_fast"icon={faHtml5} />
                        <FontAwesomeIcon className="animate__animated animate__pulse animate__infinite animate_fast" icon={faJs} />
                        <FontAwesomeIcon className="animate__animated animate__pulse animate__infinite animate_fast" icon={faGit} />
                </p>
            </div>

        </section>
    );
}

export default AboutMe;