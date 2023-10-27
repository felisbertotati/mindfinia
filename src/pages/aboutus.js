import React from "react";
import ImageHero from "../images/aboutImage.png";
import GroupMeeting from "../images/groupmeeting.png";
import TeamMeeting from "../images/teammeeting.png";

const AboutUs = () => {
  return (
    <div className="AboutContainer Container-fluid d-flex flex-column align-items-center ">
      <div
        className="HeroAbout d-flex flex-column align-items-center justify-content-center"
        style={{
          background: "#6AD7E5",

          position: "relative",
          zIndex: "100",
        }}
      >
        <h1 className="mindFinia mb-5  mt-5">About Mindfinia</h1>
        <p className="mindparagraph col-12 col-sm-5 col-md-8 col-lg-9">
          Welcome to Gravity Infosolutions, a visionary force reshaping the
          landscape of Digital Transformation, CRM, and Cloud Consulting. We
          ignite a global revolution in IT Services, forging strategic alliances
          with industry giants like Salesforce, AWS, Google Cloud, and Dynamics
          365. Our mission? To empower businesses with the tools and strategies
          they need to not only thrive but surpass all expectations, delivering
          unprecedented growth on a global scale.
        </p>
        <img
          className="Imagehero col-sm-10 col-12 col-md-8 col-lg-6 d-flex justify-content-center"
          src={ImageHero}
          alt="about us image"
        />
      </div>
      <div className=" whoAreWe d-flex flex-column align-items-center w-100">
        <hr className="mt-5" />
        <h1 className="mb-5">Who are we</h1>
        <p className="mindAreWe text-center">
          Welcome to Gravity Infosolutions, a visionary force reshaping the
          landscape of Digital Transformation, CRM, and Cloud Consulting. We
          ignite a global revolution in IT Services, forging strategic alliances
          with industry giants like Salesforce, AWS, Google Cloud, and Dynamics
          365. Our mission? To empower businesses with the tools and strategies
          they need to not only thrive but surpass all expectations, delivering
          unprecedented growth on a global scale. Welcome to Gravity
          Infosolutions, a visionary force reshaping the landscape of Digital
          Transformation, CRM, and Cloud Consulting. We ignite a global
          revolution in IT Services, forging strategic alliances with industry
          giants like Salesforce, AWS, Google Cloud, and Dynamics 365. Our
          mission? To empower businesses with the tools and strategies they need
          to not only thrive but surpass all expectations, delivering
          unprecedented growth on a global scale.
        </p>
      </div>
      <div className="card cardVision mb-5">
        <div className="row no-gutters align-items-center">
          <div className="col-md-8 p-4">
            <h3>Our Vision</h3>
            <p>
              Welcome to Gravity Infosolutions, a visionary force reshaping the
              landscape of Digital Transformation, CRM, and Cloud Consulting. We
              ignite a global revolution in IT Services, forging strategic
              alliances with industry giants like Salesforce, AWS, Google Cloud,
              and Dynamics 365. Our mission? To empower businesses with the
              tools and strategies they need to not only thrive but surpass all
              expectations, delivering unprecedented growth on a global scale.
            </p>
          </div>
          <div className="col-md-4">
            <img
              className="GroupMeeting card-img"
              src={GroupMeeting}
              alt="Group Meeting"
            />
          </div>
        </div>
      </div>
      <div className="card cardMission mb-5">
        <div className="row no-gutters align-items-center">
          <div className="col-md-4">
            <img
              className="TeamMeeting card-img"
              src={TeamMeeting}
              alt="Team Meeting"
            />
          </div>
          <div className="col-md-8 p-4">
            <h3>Our Mission</h3>
            <p>
              Welcome to Gravity Infosolutions, a visionary force reshaping the
              landscape of Digital Transformation, CRM, and Cloud Consulting. We
              ignite a global revolution in IT Services, forging strategic
              alliances with industry giants like Salesforce, AWS, Google Cloud,
              and Dynamics 365. Our mission? To empower businesses with the
              tools and strategies they need to not only thrive but surpass all
              expectations, delivering unprecedented growth on a global scale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
