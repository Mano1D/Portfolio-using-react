import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
    return (
        <>
            <nav
                class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
                id="sideNav"
            >
                <Link class="navbar-brand js-scroll-trigger" to="/">
                    <span class="d-block d-lg-none">MANONMANI G </span>
                    <span class="d-none d-lg-block">
                        <img
                            class="img-fluid img-profile rounded-circle mx-auto mb-2"

                            src="/pic.png"
                            alt="..."
                        />
                    </span>
                </Link>
                {/* <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button> */}
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link js-scroll-trigger" to="/">
                                About
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link js-scroll-trigger" to="/experience">
                                Projects
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link js-scroll-trigger" to="/education">
                                Education
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link js-scroll-trigger" to="/skills">
                                Skills
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link js-scroll-trigger" to="/interests">
                                Interests
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link js-scroll-trigger" to="/awards">
                                Certificates
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    );
};
export default Header;