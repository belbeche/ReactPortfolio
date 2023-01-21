import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <Link to="/" className="logo">Accueil</Link>
            <div className="links">
                <Link to="/apropos">Apropos</Link>
                <Link to="/projets">Projets</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Nav;