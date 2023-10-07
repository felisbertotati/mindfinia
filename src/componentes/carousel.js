import React from "react";
import "../App.css";

function InfiniteCarousel() {
  const words = [
    "PTABILITY",
    "EXPERTISE",
    "INTEGRITY",
    "IMPROVEMENT",
    "QUALITY",
    "CUSTOMER SATISFACTION",
    "TRANSPARENCY",
    "COLLABORATION",
    "IMPROVEMENT",
    "PTABILITY",
    "EXPERTISE",
    "INTEGRITY",
    "IMPROVEMENT",
    "QUALITY",
    "CUSTOMER SATISFACTION",
    "TRANSPARENCY",
    "COLLABORATION",
    "IMPROVEMENT",
    "PTABILITY",
  ];

  return (
    <div className="slider bg-black">
      <div className="slide-track">
        {words.map((word, index) => (
          <div key={index} className={`slide slide-${(index % 9) + 1}`}>
            {word}
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfiniteCarousel;
