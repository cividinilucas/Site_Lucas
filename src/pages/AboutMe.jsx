import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faJava, faReact, faJs, faGit } from "@fortawesome/free-brands-svg-icons";
import { faSquareCaretLeft, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function AboutMe() {
    const [showAboutMe, toggleShowAboutMe] = useState(false);
    const [showKnow, toggleShowKnow] = useState(false);

    const handleToggleAboutMe = () => {
        toggleShowAboutMe(!showAboutMe);
        if(!showAboutMe){
            toggleShowKnow(false) //deixa o show knowledge falso =)
        }
    }

    const handleToggleShowKnow = () => {
        toggleShowKnow(!showKnow);
        if(!showKnow){
            toggleShowAboutMe(false)
        }
    }

    return (
        //section responsável por toda a página About Me, configurada animacao usando o framer
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="about-me">
            
            {/* h1 responsável pelo botão de voltar*/}
            <motion.h1
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="link">
                <Link to={"/"}> <FontAwesomeIcon icon={faCaretLeft} /></Link>
            </motion.h1>

            {/* span responsável pelo botão de mostrar conteúdo*/}
            <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleToggleAboutMe}>
                {showAboutMe ? "Show less" : "Show more about me"}
            </motion.span>

            {/* div responsável pelo funcionamento do botão de mostrar conteúdo, usando a função criada*/}
            <motion.div
                className={`aboutme-content ${showAboutMe ? 'showAboutMe' : ''}`}>
                <p>Hi! My name is Lucas, I'm 21, and I'm studying systems development.
                    <br />
                    <br />
                    I'm graduating from Universidade Paranaense, in the Course
                    <br />
                    System analysis and development.
                    <br />
                </p>
            </motion.div>

            <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleToggleShowKnow}>
                {showKnow ? "My Knowledge" : "My Knowledge"}
            </motion.span>
            <div className={`knowledge-content ${showKnow ? 'showKnowledge' : ''}`}>
                <p className="icon">
                    <FontAwesomeIcon className="animate__animated animate__pulse animate__infinite animate_fast" icon={faReact} />
                    <FontAwesomeIcon className="animate__animated animate__pulse animate__infinite animate_fast" icon={faJava} />
                    <FontAwesomeIcon className="animate__animated animate__pulse animate__infinite animate_fast" icon={faHtml5} />
                    <FontAwesomeIcon className="animate__animated animate__pulse animate__infinite animate_fast" icon={faJs} />
                    <FontAwesomeIcon className="animate__animated animate__pulse animate__infinite animate_fast" icon={faGit} />
                </p>
            </div>

        </motion.section>
    );
}

export default AboutMe;