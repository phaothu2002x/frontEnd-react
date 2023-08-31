import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import "./Nav.scss";
function Nav(props) {
    return (
        <div className="topnav">
            <NavLink to="/" exact>
                Home
            </NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    );
}

export default Nav;
