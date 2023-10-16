import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css"; // Import your CSS file
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./componentes/navBar";
import Footer from "./componentes/footer";

import Home from "./pages/home";
import AboutUs from "./pages/aboutus";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
