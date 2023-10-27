import React from "react";
import Logo from "../images/logo.png";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      style={{
        background: "#00252A",
        padding: "20px 0",
        width: "100vw",
      }}
    >
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-md-4">
            <img className="LogoOne" src={Logo} alt="Logo" />
            <p className="text-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="social-icons">
              <a href="#" className="btn btn-outline-light icon-background">
                <FaFacebook className="icon" />
              </a>
              <a href="#" className="btn btn-outline-light icon-background">
                <FaInstagram className="icon" />
              </a>
              <a href="#" className="btn btn-outline-light icon-background">
                <FaTwitter className="icon" />
              </a>
              <a href="#" className="btn btn-outline-light icon-background">
                <FaLinkedin className="icon" />
              </a>
            </div>
          </div>
          <div className="col-md-4 text-light">
            <h3>Links</h3>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Who we are</li>
              <li>What we Do?</li>
              <li>Solution</li>
              <li>Contact US</li>
            </ul>
          </div>
          <div className="col-md-4 text-light">
            <h3>Contact us</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>+923183561921</p>
          </div>
        </div>
      </div>
      <div>
        <hr
          className="footerHr text-white-50 "
          style={{
            width: "100%",
            height: "1px",
          }}
        />
        <p className="text-white-50 text-center">
          © 2023 Copyright by IK Developers. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
