import React from "react";

import "./Nav.scss";
function Nav() {
    return (
        <div className="topnav">
            <a className="active">Home</a>
            <a href="/news">News</a>
            <a href="/contact">Contact</a>
            <a href="/about">About</a>
        </div>
    );
}

export default Nav;
