import React, { useEffect, useState, useContext } from "react";
import {
    NavLink,
    useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

import { UserContext } from "../../context/UserContext";
import "./Nav.scss";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../logo.svg";

function NavHeader(props) {
    const { user } = useContext(UserContext);
    const location = useLocation();

    if ((user && user.isAuthenticated === true) || location.pathname === "/") {
        return (
            <>
                {/* <div className="topnav">
                    <NavLink to="/" exact>
                        Home
                    </NavLink>
                    <NavLink to="/users">Users</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/about">About</NavLink>
                </div> */}

                <div className="nav-header">
                    <Navbar expand="lg" className="bg-body-tertiary bg-header">
                        <Container>
                            <Navbar.Brand href="#home">
                                <img
                                    src={logo}
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                    alt="logo"
                                />
                                <span className="brand-name">React</span>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <NavLink to="/" className="nav-link" exact>
                                        Home
                                    </NavLink>
                                    <NavLink to="/users" className="nav-link">
                                        Users
                                    </NavLink>
                                    <NavLink
                                        to="/projects"
                                        className="nav-link"
                                    >
                                        Projects
                                    </NavLink>
                                    <NavLink to="/about" className="nav-link">
                                        About
                                    </NavLink>
                                </Nav>
                                <Nav>
                                    <Nav.Item className="nav-link">
                                        Welcome
                                    </Nav.Item>
                                    <NavDropdown
                                        title="Settings"
                                        id="basic-nav-dropdown"
                                    >
                                        <NavDropdown.Item href="#action/3.1">
                                            Change Password
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </>
        );
    } else {
        return <></>;
    }
}

export default NavHeader;
