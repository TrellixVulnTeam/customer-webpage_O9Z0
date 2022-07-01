import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <h1 id="logo">Aldo Pagani Jr</h1>
            <ul>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/Photography">Photography</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;