import React from "react";
import go from "../images/Go.png";
import java from "../images/Java.png";
import mongo from "../images/mongodb.png";
import mysql from "../images/mysql.png";
import Netcore from "../images/NETCore.png";
import nodejs from "../images/NodeJS.png";
import php from "../images/PHP.png";
import python from "../images/Python.png";
import ruby from "../images/RubyOnRails.png";

const OurCustomers = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        marginTop: "5vw",
      }}
    >
      <hr />
      <h4 className="our">Our</h4>
      <h3 className="valued mb-5">Valued Customer</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img className="node" src={nodejs} alt="node" />
        <img className="php" src={php} alt="php" />
        <img className="Mysql" src={mysql} alt="mysql" />
        <img className="java" src={java} alt="java" />
        <img className="net" src={Netcore} alt="net" />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img className="python" src={python} alt="python" />
        <img className="rails" src={ruby} alt="ruby" />
        <img className="go" src={go} alt="go" />
        <img className="mongo" src={mongo} alt="mongoDb" />
      </div>
    </div>
  );
};

export default OurCustomers;
