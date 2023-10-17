import React from "react";
import "../App.css";
import addclip from "../images/addclip.png";
import bImage from "../images/b.png";
import click from "../images/clickorder.png";
import logothree from "../images/logothree.png";
import pjc from "../images/pjc.png";
import sampath from "../images/sampath.png";
import techmate from "../images/techmate.png";

const logoCarousel = () => {
  const images = [
    addclip,
    bImage,
    click,
    logothree,
    pjc,
    sampath,
    techmate,
    addclip,
    bImage,
    click,
    logothree,
    pjc,
    sampath,
    techmate,
    // ... more image paths or URLs
  ];

  return (
    <div
      className="slider bg-light"
      style={{
        height: "7vw",
        paddingTop: "1vw",
      }}
    >
      <div className="slide-track">
        {images.map((imageSrc, index) => (
          <div key={index} className={`slide slide-${(index % 9) + 1}`}>
            <img src={imageSrc} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default logoCarousel;
