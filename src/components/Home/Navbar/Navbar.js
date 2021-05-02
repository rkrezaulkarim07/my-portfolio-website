import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        Md Rezaul Karim
                    </NavLink>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/about"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                            About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/projects"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                            Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/blog"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                            Blog
                            </NavLink>

                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                            Contact
                            </NavLink>
              
                        </li>
                        <li className="nav-item">
                            <a href="https://drive.google.com/file/d/1CmikA3H76alDYDhOG1w7BQIylUbubVuf/view?usp=sharing" className="nav-links btn btn-success" target="_blank">Resume</a>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;