import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HeroImage from "./images/backgroundtwo.png";
import NavBar from "./componentes/navBar";
import Hero from "./componentes/hero";
import Carouseltext from "./componentes/carousel";
import About from "./componentes/about";
import LogoCarousel from "./componentes/logocarousel";

function App() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "625px",
        }}
      >
        <NavBar />
        <Hero />
      </div>
      <Carouseltext />
      <About />
      <LogoCarousel />
    </div>
  );
}

export default App;
