import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

const Ability = () => {
  const cardInfo = [
    {
      title: "100%",
      text: "PROFICIENCY",
      desc: "Gravity Infosolutions expertise spans consulting, development, integration, delivering tailored high-quality solutions to meet specific industry needs.",
    },
    {
      title: "100%",
      text: "AFFORDABILITY",
      desc: "Gravity Infosolutions expertise spans consulting, development, integration, delivering tailored high-quality solutions to meet specific industry needs.",
    },
    {
      title: "100%",
      text: "AGILITY",
      desc: "Gravity Infosolutions expertise spans consulting, development, integration, delivering tailored high-quality solutions to meet specific industry needs.",
    },
  ];

  return (
    <Container
      fluid
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50vh",
        background: "#F7F7FA",
      }}
    >
      <Row className="justify-content-center">
        {cardInfo.map((card, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card
              style={{ width: "18rem", border: "none", background: "#F7F7FA" }}
            >
              <Card.Body style={{ textAlign: "center" }}>
                <Card.Title
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    border: "2px black solid",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "5px auto",
                  }}
                >
                  {card.title}
                </Card.Title>
                <Card.Text>{card.text}</Card.Text>
                <Card.Text>{card.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Ability;
