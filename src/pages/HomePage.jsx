import react from "react";
import "animate.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function HomePage() {
    const redirectOnClick = () => {
        const linkGitHub = 'https://github.com/cividinilucas'
        window.open(linkGitHub, '_blank')
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}>
            <motion.h1
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <Link className="link" to={"/aboutme"}> Lucas Cividini </Link>
            </motion.h1>

            <motion.h2
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={redirectOnClick}>
                <Link className="link"> GitHub </Link>
            </motion.h2>
        </motion.section>
    )
}

export default HomePage;