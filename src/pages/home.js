import React from "react";
import Carousel from "../componentes/carousel";
import LogoCarousel from "../componentes/logocarousel";
import Services from "../componentes/services";
import WhyUsImage from "../images/whyUs.png";
import HeroImage from "../images/heroimage.png";
import imageAbout from "../images/aboutImage.png";
import Ability from "../componentes/ability";
import Ourcustomers from "../componentes/ourCustomer";
import Reviews from "../componentes/reviews";
import WorkFlow from "../componentes/workFlow";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const home = () => {
  return (
    <>
      <div className="style" style={{ width: "100vw", height: "70vh" }}>
        <div
          className="hero-background"
          style={{ backgroundImage: `url(${HeroImage})` }}
        >
          <div className="d-flex justify-content-center align-items-center ">
            <div className="heroText ">
              <p className="lead text-center text-light mb-0  ">
                "Mindfinia" combines intellectual expertise ("Mind") with
                limitless technological possibilities ("Finia"), encapsulating a
                promise of strategic insight and boundless solutions for
                technology consulting and services
              </p>
            </div>
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
      <div className="row">
        <div className="col-12 col-md-7">
          <hr
            style={{
              marginLeft: "3.5vw",
              marginTop: "5vw",
            }}
          />
          <h4 className="about">About Mindfinia</h4>
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
        <div className="col-12 col-md-5 text-center mt-4 mt-md-0">
          <img
            className="aboutImage img-fluid"
            src={imageAbout}
            alt="Image about the company"
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-md-6 meetPeople">
          <hr className="hrPeople" />
          <h6 className="people">Meet the people</h6>
          <h4 className="WorkingWith">We are Working With</h4>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-between justify-content-md-end mt-3 mt-md-0">
          <button className="iconleft">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="iconright ml-3">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>

      <div>
        <LogoCarousel />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <div className="row align-items-center mb-5">
          <div className=" col-md-7 col-sm-12 t">
            <hr style={{ marginLeft: "3.5vw" }} />
            <h4 className="about ">Why Choose Us</h4>
            <h6 className="heading">
              UNMATCHED EXPERTISE, EMPOWERING SCALABILITY, & IRRESISTIBLE
              COMPETITIVE PRICING
            </h6>
            <p className="paragraph">
              Gravity Infosolutions is a dynamic digital transformation,
              Salesforce consulting and development powerhouse, dedicated to
              empowering businesses to unleash the full potential of the
              Salesforce platform. With a comprehensive suite of cutting-edge
              services, we enable organizations to embark on seamless Salesforce
              implementation, tailor-made customization, seamless integration,
              streamlined migration, and unwavering support. We are your trusted
              partner in harnessing the transformative power of Salesforce to
              drive unprecedented growth, enhance operational efficiency, and
              achieve unrivaled success.
            </p>
          </div>
          <div className="col-md-5 col-sm-12 text-center">
            <img
              className="aboutImage"
              src={WhyUsImage}
              alt="Image about the company"
            />
          </div>
        </div>
      </div>
      <div>
        <Ability />
      </div>
      <Ourcustomers />
      <Reviews />
      <WorkFlow />
    </>
  );
};

export default home;
