import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
  const imageList1 = [nodejs, php, mysql, java, Netcore];
  const imageList2 = [python, ruby, go, mongo];

  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center mt-5"
      style={{ height: "100%" }}
    >
      <hr />
      <h4 className="our">Our</h4>
      <h3 className="valued mb-5">Valued Customer</h3>

      <Row className="justify-content-center mb-3">
        {imageList1.map((imgSrc, idx) => (
          <Col
            xs={6}
            sm={4}
            md={2}
            key={idx}
            className="d-flex justify-content-center"
          >
            <img src={imgSrc} alt="logo" style={{ maxWidth: "100%" }} />
          </Col>
        ))}
      </Row>

      <Row className="justify-content-center">
        {imageList2.map((imgSrc, idx) => (
          <Col
            xs={6}
            sm={4}
            md={2}
            key={idx}
            className="d-flex justify-content-center"
          >
            <img src={imgSrc} alt="logo" style={{ maxWidth: "100%" }} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurCustomers;
