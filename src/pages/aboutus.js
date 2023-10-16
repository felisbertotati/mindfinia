import React from "react";
import ImageHero from "../images/aboutImage.png";
import GroupMeeting from "../images/groupmeeting.png";
import TeamMeeting from "../images/teammeeting.png";

const aboutUs = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <div
          className="HeroAbout d-flex flex-column align-items-center justify-content-center"
          style={{
            background: "#6AD7E5",
            height: "30vw",
          }}
        >
          <h1>About Mindfinia</h1>
          <p>
            Welcome to Gravity Infosolutions, a visionary force reshaping the
            landscape of Digital Transformation, CRM, and Cloud Consulting. We
            ignite a global revolution in IT Services, forging strategic
            alliances with industry giants like Salesforce, AWS, Google Cloud,
            and Dynamics 365. Our mission? To empower businesses with the tools
            and strategies they need to not only thrive but surpass all
            expectations, delivering unprecedented growth on a global scale.
          </p>
          <img
            className="Imagehero d-flex justify-content-center"
            src={ImageHero}
            alt="about us image"
          />
        </div>
        <div className="d-flex flex-column align-items-center w-100">
          <hr />
          <h1>who are we</h1>
          <p>
            Welcome to Gravity Infosolutions, a visionary force reshaping the
            landscape of Digital Transformation, CRM, and Cloud Consulting. We
            ignite a global revolution in IT Services, forging strategic
            alliances with industry giants like Salesforce, AWS, Google Cloud,
            and Dynamics 365. Our mission? To empower businesses with the tools
            and strategies they need to not only thrive but surpass all
            expectations, delivering unprecedented growth on a global scale.
          </p>
          <p>
            Welcome to Gravity Infosolutions, a visionary force reshaping the
            landscape of Digital Transformation, CRM, and Cloud Consulting. We
            ignite a global revolution in IT Services, forging strategic
            alliances with industry giants like Salesforce, AWS, Google Cloud,
            and Dynamics 365. Our mission? To empower businesses with the tools
            and strategies they need to not only thrive but surpass all
            expectations, delivering unprecedented growth on a global scale.
          </p>
        </div>
        <div>
          <div className="container">
            <hr />
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
          <img
            className="GroupMeeting "
            src={GroupMeeting}
            alt="Group Meeting"
          />
        </div>
        <div className="container">
          <img className="TeamMeeting" src={TeamMeeting} alt="Team Meeting" />
          <hr />
          <h3>Our Mission</h3>
          <p>
            Welcome to Gravity Infosolutions, a visionary force reshaping the
            landscape of Digital Transformation, CRM, and Cloud Consulting. We
            ignite a global revolution in IT Services, forging strategic
            alliances with industry giants like Salesforce, AWS, Google Cloud,
            and Dynamics 365. Our mission? To empower businesses with the tools
            and strategies they need to not only thrive but surpass all
            expectations, delivering unprecedented growth on a global scale.
          </p>
        </div>
      </div>
    </>
  );
};

export default aboutUs;
