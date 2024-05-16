import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faReact} from "@fortawesome/free-brands-svg-icons";

function AboutMe() {
    const [showInfo, toggleShowInfo] = useState(false);

    return (
        <section>
            <h1 className="aboutme" onClick={() => toggleShowInfo(!showInfo)}>
                {showInfo ? "Hide Info" : "Show Info"}
            </h1>
            <div className={`aboutme-content ${showInfo ? 'show' : ''}`}>
                <p>Hi! My name is Lucas, and I'm studying systems development.</p>
                <p><FontAwesomeIcon icon={faReact}/></p>
            </div>
        </section>
    );
}

export default AboutMe;