import React, { useRef, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Carousel, Card } from "react-bootstrap";
import iconOne from "../images/iconone.png";
import iconTwo from "../images/icontwo.png";
import iconThree from "../images/iconthree.png";

function ServiceCard({ title, desc, image }) {
  return (
    <div style={{ width: "333px", height: "287px", position: "relative" }}>
      <div
        style={{
          width: "333px",
          height: "287px",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <div
          style={{
            width: "333px",
            height: "287px",
            background: "#FAFAFA",
            boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.05)",
            borderRadius: "7px",
          }}
        ></div>
      </div>
      <div
        style={{
          position: "absolute",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "20px",
          display: "inline-flex",
          left: "16px",
          top: "36px",
        }}
      >
        <div
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "20px",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "58px",
              height: "58px",
              background: "#FAFAFA",
              borderRadius: "9999px",
              border: "1px #6AD7E5 solid",
            }}
          ></div>
          <div
            style={{
              width: "271px",
              height: "25px",
              color: "#2D3748",
              fontSize: "20px",
              fontFamily: "Syne",
              fontWeight: "600",
              lineHeight: "27.30px",
              wordWrap: "break-word",
            }}
          >
            {title}
          </div>
        </div>
        <div
          style={{
            width: "301px",
            color: "#718096",
            fontSize: "14px",
            fontFamily: "Rubik",
            fontWeight: "400",
            lineHeight: "22.68px",
            wordWrap: "break-word",
          }}
        >
          {desc}
        </div>
      </div>
    </div>
  );
}

function Services() {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsPerSlide = 3;

  const groupedCardData = [];
  for (let i = 0; i < cardData.length; i += cardsPerSlide) {
    groupedCardData.push(cardData.slice(i, i + cardsPerSlide));
  }

  return (
    <div className="wrapper-services">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Carousel
              ref={carouselRef}
              activeIndex={activeIndex}
              onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
              interval={null}
              controls={false}
            >
              {groupedCardData.map((group, idx) => (
                <Carousel.Item key={idx}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {group.map((service) => (
                      <ServiceCard
                        key={service.title}
                        title={service.title}
                        desc={service.desc}
                        image={service.image}
                      />
                    ))}
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

const cardData = [
  {
    image: iconTwo,
    title: "Web Design & Development",
    desc: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    image: iconOne,
    title: "Mobile App Development",
    desc: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    image: iconTwo,
    title: "Web Design Development",
    desc: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    image: iconThree,
    title: "Software Testing Service",
    desc: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    image: iconTwo,
    title: "Software Testing Service",
    desc: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
];

export default Services;
