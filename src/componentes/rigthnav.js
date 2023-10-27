import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const RightNav = ({ open }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const style = {
    transform: open ? "translateX(0%)" : "translateX(100%)",
    transition: open ? "transform 0.3s ease-out" : "transform 0.3s ease-out",
  };

  const mobile = (
    <div className={`nav-mobile ${isHomePage ? "" : "not-home"}`} style={style}>
      <Link className="nav-link" to="/">
        <li className="list ">Home</li>
      </Link>
      <Link className="nav-link" to="/about">
        <li className="list">About Us</li>
      </Link>
      <Link className="nav-link" to="/who-we-are">
        <li className="list">Who We are</li>
      </Link>
      <Link className="nav-link" to="/what-we-do">
        <li className="list">What We Do?</li>
      </Link>
      <Link className="nav-link" to="/solution">
        <li className="list">Solution</li>
      </Link>
      <Link className="nav-link" to="/contact">
        <li className="list">Contact Us</li>
      </Link>
    </div>
  );

  const desktop = (
    <div className={`nav-desktop ${isHomePage ? "" : "not-home"}`}>
      <Link className="nav-link" to="/">
        <li className="list ">Home</li>
      </Link>
      <Link className="nav-link" to="/about">
        <li className="list">About Us</li>
      </Link>
      <Link className="nav-link" to="/who-we-are">
        <li className="list">Who We are</li>
      </Link>
      <Link className="nav-link" to="/what-we-do">
        <li className="list">What We Do?</li>
      </Link>
      <Link className="nav-link" to="/solution">
        <li className="list">Solution</li>
      </Link>
      <Link className="nav-link" to="/contact">
        <li className="list">Contact Us</li>
      </Link>
    </div>
  );
  return (
    <>
      <div className="md:hidden">{mobile}</div>
      <div className="hidden md:flex md:justify-center lg:flex lg:justify-center xl:flex xl:justify-center ">
        {desktop}
      </div>
    </>
  );
};

export default RightNav;
