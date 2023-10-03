import React, { useEffect, useState, useContext } from "react";
import {
    NavLink,
    useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

import { UserContext } from "../../context/UserContext";
import "./Nav.scss";

function Nav(props) {
    const { user } = useContext(UserContext);
    const location = useLocation();

    if ((user && user.isAuthenticated === true) || location.pathname === "/") {
        return (
            <>
                <div className="topnav">
                    <NavLink to="/" exact>
                        Home
                    </NavLink>
                    <NavLink to="/users">Users</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div>
            </>
        );
    } else {
        return <></>;
    }
}

export default Nav;
