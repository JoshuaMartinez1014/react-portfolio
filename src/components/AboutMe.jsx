import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../styles/global.css";

function AboutMe() {
  return (
    <Container className="my-5">
      <Card className="mb-3 border-bottom-navy">
        <Row className="no-gutters">
          <Col md={6}>
            <div className="image-container ">
              <Card.Img
                height="400px"
                src="../img/Main-Logo-Boat.jpg"
                alt="Your Description"
                className="about-image"
              />
            </div>
          </Col>
          <Col md={6} className="flex-shrink-0">
            <Card.Body>
              <Card.Title>Hey, My name is Josh</Card.Title>
              <Card.Text>
                I am a web developer and graphic designer who is passionate
                about continuous learning and creating captivating visual
                designs. With expertise in web development, I craft interactive
                and user-friendly websites. My love for graphic design fuels my
                creativity, allowing me to produce visually captivating designs
                across platforms. I am always eager to learn and stay updated
                with the latest trends and technologies.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default AboutMe;
