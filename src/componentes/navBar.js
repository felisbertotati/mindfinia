import React from "react";
import logo from "../images/logo.png";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-transperant border-bottom">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="navLogo" src={logo} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={`nav-link ${
                    isHomePage ? "text-light" : "text-dark"
                  }`}
                  activeClassName="active-link"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={`nav-link ${
                    isHomePage ? "text-light" : "text-dark"
                  }`}
                  activeClassName="active-link"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/who-we-are"
                  className={`nav-link ${
                    isHomePage ? "text-light" : "text-dark"
                  }`}
                  activeClassName="active-link"
                >
                  Who We are
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/what-we-do"
                  className={`nav-link ${
                    isHomePage ? "text-light" : "text-dark"
                  }`}
                  activeClassName="active-link"
                >
                  What We Do?
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/solution"
                  className={`nav-link ${
                    isHomePage ? "text-light" : "text-dark"
                  }`}
                  activeClassName="active-link"
                >
                  Solution
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={`nav-link ${
                    isHomePage ? "text-light" : "text-dark"
                  }`}
                  activeClassName="active-link"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
