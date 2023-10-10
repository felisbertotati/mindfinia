import React from "react";
import Carousel from "../componentes/carousel";
import LogoCarousel from "../componentes/logocarousel";
import Services from "../componentes/services";
import HeroImage from "../images/heroimage.png";
import imageAbout from "../images/aboutImage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const home = () => {
  return (
    <>
      <div className="style" style={{ width: "100vw", height: "70vh" }}>
        <div
          style={{
            backgroundImage: `url(${HeroImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "625px",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "-1",
          }}
        >
          <div className="heroText">
            <p className="lead d-flex justify-content-center text-light  fs-3">
              "Mindfinia" combines intellectual expertise ("Mind") with
              limitless technological possibilities ("Finia"), encapsulating a
              promise of strategic insight and boundless solutions for
              technology consulting and services
            </p>
          </div>
        </div>
      </div>
      <div
        className="carousel"
        style={{
          overflowX: "hidden",
          width: "100vw",
        }}
      >
        <Carousel />
      </div>
      <div className="row align-items-center">
        <div className="col-md-7">
          <hr />
          <h4 className="about ">About Mindfinia</h4>
          <p className="paragraph">
            Welcome to Gravity Infosolutions, a visionary force reshaping the
            landscape of Digital Transformation, CRM, and Cloud Consulting. We
            ignite a global revolution in IT Services, forging strategic
            alliances with industry giants like Salesforce, AWS, Google Cloud,
            and Dynamics 365. Our mission? To empower businesses with the tools
            and strategies they need to not only thrive but surpass all
            expectations, delivering unprecedented growth on a global scale.
          </p>
        </div>
        <div className="col-md-5">
          <img
            className="aboutImage"
            src={imageAbout}
            alt="Image about the company"
          />
        </div>
      </div>
      <div className="row ">
        <div className="col-md-6 meetPeople">
          <hr />
          <h6 className="people">Meet the people</h6>
          <h4 className="WorkingWith">We are Working With</h4>
        </div>
        <div className=" buttonArrow col-md-6 d-flex  mb-5 justify-content-end">
          <button className="iconleft">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="iconright">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <div>
        <LogoCarousel />
      </div>
      <Services />
    </>
  );
};

export default home;
