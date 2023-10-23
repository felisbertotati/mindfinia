import React from "react";
import Logo from "../images/logo.png";
import Burger from "./burger";

const NavBar = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100px",
        padding: "0 18px",
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid white",
      }}
    >
      <div className="logo" style={{ padding: "5px 0" }}>
        <img className="imageLogo" src={Logo} alt="Company Logo" />
      </div>
      <Burger />
    </div>
  );
};

export default NavBar;
