import React from "react";
import imageAbout from "../images/aboutImage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-7">
            <hr />
            <h4>About Mindfinia</h4>
            <p className="paragraph mt-4">
              Welcome to Gravity Infosolutions, a visionary force reshaping the
              landscape of Digital Transformation, CRM, and Cloud Consulting. We
              ignite a global revolution in IT Services, forging strategic
              alliances with industry giants like Salesforce, AWS, Google Cloud,
              and Dynamics 365. Our mission? To empower businesses with the
              tools and strategies they need to not only thrive but surpass all
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
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <hr />
            <h6 className="people">Meet the people</h6>
            <h4 className="WorkingWith">We are Working With</h4>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <button className="iconleft">
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button className="iconright">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
