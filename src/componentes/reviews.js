import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faQuoteRight,
  faQuoteLeft,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import PhotoOne from "../images/photoone.png";
import PhotoTwo from "../images/photoTwo.png";
import PhotoThree from "../images/photothree.png";
import PhotoFour from "../images/photofour.png";
import PhotoFive from "../images/photofive.png";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const testimonials = [
  {
    icon: faQuoteLeft,
    description:
      "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    icontwo: faQuoteRight,
  },
  {
    icon: faQuoteLeft,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    icontwo: faQuoteRight,
  },
  {
    icon: faQuoteLeft,
    description:
      "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    icontwo: faQuoteRight,
  },
  {
    icon: faQuoteLeft,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    icontwo: faQuoteRight,
  },
  {
    icon: faQuoteLeft,
    description:
      "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    icontwo: faQuoteRight,
  },
];

const reviwers = [
  {
    Image: PhotoOne,
    Rating: 5,
    Name: "Romeena De Silva",
    Prof: "Janet Cosmetics",
  },
  {
    Image: PhotoTwo,
    Rating: 5,
    Name: "Romeena De Silva",
    Prof: "Janet Cosmetics",
  },
  {
    Image: PhotoThree,
    Rating: 5,
    Name: "Imran Khan",
    Prof: "Software Engineer",
  },
  {
    Image: PhotoFour,
    Rating: 5,
    Name: "Romeena De Silva",
    Prof: "Janet Cosmetics",
  },
  {
    Image: PhotoFive,
    Rating: 5,
    Name: "Romeena De Silva",
    Prof: "Janet Cosmetics",
  },
];

const Reviews = () => {
  const [currentPerson, setCurrentPerson] = useState(0);

  const slide = (index) => {
    if (index >= 0 && index < testimonials.length) {
      setCurrentPerson(index);
    }
  };

  return (
    <Container className="mt-5">
      <hr className="hrReviws" />
      <h1 className="mb-4 text-center">Why customers love</h1>
      <h2 className="text-center mb-5">working with us</h2>
      <Row className="justify-content-center">
        <Col xs={12} lg={9} className="position-relative">
          {currentPerson !== 0 && (
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="iconReviewsLeft position-absolute"
              onClick={() => slide(currentPerson - 1)}
            />
          )}

          <div id="reviewWrap" className="review-wrap text-center">
            <FontAwesomeIcon
              icon={testimonials[currentPerson].icon}
              className="iconQuoteLeft"
            />
            <div id="description" className="mb-4">
              {testimonials[currentPerson].description}
            </div>
            <FontAwesomeIcon
              icon={testimonials[currentPerson].icontwo}
              className="iconQuoteRight"
            />
          </div>

          {currentPerson !== testimonials.length - 1 && (
            <FontAwesomeIcon
              icon={faArrowRight}
              className="iconReviewsRight position-absolute"
              onClick={() => slide(currentPerson + 1)}
            />
          )}
        </Col>

        <Col xs={12} className="d-flex justify-content-center mt-4">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`reviewer-card-wrapper mx-1 ${
                // Added mx-1 for small horizontal spacing
                currentPerson === index ? "active-card" : "inactive-card"
              }`}
              onClick={() => slide(index)}
            >
              <img
                src={reviwers[index].Image}
                alt={reviwers[index].Name}
                className="img-fluid"
              />{" "}
              {/* img-fluid to ensure the image resizes responsively */}
              <div>
                {[...Array(reviwers[index].Rating)].map((_, idx) => (
                  <FontAwesomeIcon
                    key={idx}
                    icon={faStar}
                    color="yellow"
                    className="star-icon"
                  />
                ))}
              </div>
              <p>{reviwers[index].Name}</p>
              <p>{reviwers[index].Prof}</p>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
