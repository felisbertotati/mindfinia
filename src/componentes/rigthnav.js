import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const RightNav = ({ open }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const style = {
    transform: open ? "translateX(0)" : "translateX(100%)",
  };
  return (
    <div className={`nav-container ${isHomePage ? "" : "not-home"}`}>
      <div style={style}>
        <ul className="unlist">
          <Link to="/">
            <li className="list ">Home</li>
          </Link>
          <Link to="/about">
            <li className="list">About Us</li>
          </Link>
          <Link to="/who-we-are">
            <li className="list">Who We are</li>
          </Link>
          <Link to="/what-we-do">
            <li className="list">What We Do?</li>
          </Link>
          <Link to="/solution">
            <li className="list">Solution</li>
          </Link>
          <Link to="/contact">
            <li className="list">Contact Us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default RightNav;
