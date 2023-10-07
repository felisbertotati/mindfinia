import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HeroImage from "./images/backgroundtwo.png";
import NavBar from "./componentes/navBar";
import Hero from "./componentes/hero";
import Carouseltext from "./componentes/carousel";
import About from "./componentes/about";

function App() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "675px",
        }}
      >
        <NavBar />
        <Hero />
      </div>
      <Carouseltext />
      <About />
    </div>
  );
}

export default App;
