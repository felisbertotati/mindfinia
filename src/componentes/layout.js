// Layout.js
import React from "react";
import NavBar from "./navBar";
import Footer from "./footer";

const Layout = ({ children }) => (
  <div className="app">
    <NavBar />
    <div className="content">{children}</div>
    <Footer />
  </div>
);

export default Layout;
