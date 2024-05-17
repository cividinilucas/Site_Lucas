import react from "react";
import "animate.css";
import { Link } from "react-router-dom";


function HomePage() {
    const redirectOnClick = () => {
        const linkGitHub = 'https://github.com/cividinilucas'
        window.open(linkGitHub, '_blank')
    }

    return (
        <section>
            <h1 className="animate__animated animate__pulse animate__infinite animate__fast">
                <Link className="link" to={"/aboutme"}> Lucas Cividini </Link>
            </h1>

            <h2 className="animate__animated animate__pulse animate__infinite animate__fast" onClick={redirectOnClick}>
                <Link className="link"> GitHub </Link>
            </h2>
        </section>
    )
}

export default HomePage;