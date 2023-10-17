import React, { useState, useRef } from "react";
import iconOne from "../images/iconone.png";
import iconTwo from "../images/icontwo.png";
import iconThree from "../images/iconthree.png";

const Card = (props) => (
  <div
    className={`card cardStyle ${props.isActive ? "active" : ""}`}
    style={{
      flex: "1 0 250px",
      margin: "2rem",
      overflow: "hidden",
      borderRadius: "6px",
      cursor: "pointer",
    }}
  >
    <img
      src={props.image}
      alt={props.title}
      style={{
        width: "50px",
        height: "50px",
        objectFit: "center",
        borderRadius: "9999px",
        border: "1px #6AD7E5 solid",
        paddingLeft: "10px",
        paddingRight: "10px",
        marginLeft: "10px",
        marginTop: "10px",
      }}
    />
    <div className="card-content" style={{ padding: "1rem" }}>
      <h2
        style={{
          fontFamily: "Syne",
          fontWeight: "600",
          fontSize: "20px",
          color: "#2D3748",
        }}
      >
        {props.title}
      </h2>
      <p
        style={{
          fontFamily: "Rubik",
          fontWeight: "400",
          fontSize: "14px",
          color: "#718096",
        }}
      >
        {props.desc}
      </p>
    </div>
  </div>
);

const CardContainer = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const cardWidth = 272; // Approximate card width + margin

  const handleIndexChange = (index) => {
    setActiveIndex(index);
    const newScrollPosition = index * cardWidth;
    if (containerRef.current) {
      containerRef.current.scrollLeft = newScrollPosition;
    }
  };

  return (
    <div>
      <div
        ref={containerRef}
        className="cards-container"
        style={{
          display: "flex",
          padding: "1rem",
          overflowX: "hidden",
          position: "relative",
          transition: "scroll-left 0.5s",
        }}
      >
        {props.cards.map((card, index) => (
          <Card
            key={card.title}
            title={card.title}
            desc={card.desc}
            image={card.image}
            isActive={activeIndex === index}
          />
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        {props.cards.map((_, index) => (
          <span
            key={index}
            style={{
              height: "8px",
              width: "8px",
              backgroundColor: activeIndex === index ? "#6AD7E5" : "#FFFF",
              borderRadius: "50%",
              display: "inline-block",
              margin: "0 2px",
              cursor: "pointer",
            }}
            onClick={() => handleIndexChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

const Services = () => {
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

  return (
    <div className="div" style={{ background: "#F7FEFF", paddingTop: "30px" }}>
      <div
        className="container"
        style={{
          width: "90%",
          height: "35vw",
        }}
      >
        <hr
          className="hr"
          style={{
            marginLeft: "600px",
          }}
        />
        <h1 style={{ textAlign: "center" }}>Services we offer</h1>
        <CardContainer cards={cardData} />
      </div>
    </div>
  );
};

export default Services;
