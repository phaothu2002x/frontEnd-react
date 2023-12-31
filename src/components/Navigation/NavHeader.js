import React, { useEffect, useState, useContext } from "react";
import {
    Link,
    NavLink,
    useLocation,
    useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

import { UserContext } from "../../context/UserContext";
import "./Nav.scss";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../logo.svg";
import { toast } from "react-toastify";
import { logoutUser } from "../../services/userService";

function NavHeader(props) {
    const { user, logoutContext } = useContext(UserContext);
    const location = useLocation();
    const history = useHistory();

    const handleLogout = async () => {
        let data = await logoutUser(); //clear cookies
        localStorage.removeItem("jwt"); //clear local storage
        logoutContext(); //clear user in context

        if (data && +data.EC === 0) {
            toast.success("log out succeeds...");
            history.push("/login");
        } else {
            toast.error(data.EM);
        }
    };

    if ((user && user.isAuthenticated === true) || location.pathname === "/") {
        return (
            <>
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
                                    <NavLink to="/roles" className="nav-link">
                                        Roles
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
                                    {user && user.isAuthenticated === true ? (
                                        <>
                                            <Nav.Item className="nav-link">
                                                Welcome {user.account.username}
                                            </Nav.Item>

                                            <NavDropdown
                                                title="Settings"
                                                id="basic-nav-dropdown"
                                            >
                                                <NavDropdown.Item>
                                                    Change Password
                                                </NavDropdown.Item>
                                                <NavDropdown.Item>
                                                    <span
                                                        onClick={() =>
                                                            handleLogout()
                                                        }
                                                    >
                                                        Logout
                                                    </span>
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                        </>
                                    ) : (
                                        <Link className="nav-link" to="/login">
                                            Login
                                        </Link>
                                    )}
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
