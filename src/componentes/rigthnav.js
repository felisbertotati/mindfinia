import React from "react";

const RightNav = ({ open }) => {
  const style = {
    transform: open ? "translateX(0)" : "translateX(100%)",
  };
  return (
    <div style={style}>
      <ul className="unlist">
        <li className="list">Home</li>
        <li className="list">About Us</li>
        <li className="list">Who We are</li>
        <li className="list">What We Do?</li>
        <li className="list">Solution</li>
        <li className="list">Contact Us</li>
      </ul>
    </div>
  );
};

export default RightNav;
