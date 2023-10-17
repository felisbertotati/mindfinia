import React, { useState } from "react";
import RightNav from "./rigthnav";

const BurgerLine = ({ open, index }) => {
  let style = {
    backgroundColor: open ? "#f1f1f1" : "#333",
  };

  if (index === 0) {
    style.transform = open ? "rotate(45deg)" : "rotate(0)";
  }

  if (index === 1) {
    style.transform = open ? "translateX(100%)" : "translateX(0)";
    style.opacity = open ? 0 : 1;
  }

  if (index === 2) {
    style.transform = open ? "rotate(-45deg)" : "rotate(0)";
  }

  return <div className="burgerLine" style={style}></div>;
};

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="burger" onClick={() => setOpen(!open)}>
        <BurgerLine open={open} index={0} />
        <BurgerLine open={open} index={1} />
        <BurgerLine open={open} index={2} />
      </div>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
