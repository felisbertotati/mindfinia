// Layout.js
import React from "react";
import NavBar from "./navBar";
import Footer from "./footer";

const Layout = ({ children }) => (
  <div className="container-fluid p-0">
    <NavBar />
    <div>{children}</div>
    <Footer />
  </div>
);

export default Layout;
