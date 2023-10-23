import React from "react";
import "./App.css"; // Import your CSS file
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./componentes/layout";
import Home from "./pages/home";
import AboutUs from "./pages/aboutus";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
