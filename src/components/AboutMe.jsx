import { Card, Container, Row, Col } from "react-bootstrap";
import "../styles/global.css";
import Resume from "./Resume";

function AboutMe() {
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <h1 style={{ marginLeft: "10%", textDecoration: "underline" }}>
          About me
        </h1>
        <Container className="my-5">
          <Card className="mb-3 bg-transparent border-0 shadow-none">
            <Row className="no-gutters">
              <Col md={6}>
                <div className="image-container ">
                  <Card.Img
                    height="400px"
                    src="../img/Main-Logo-Boat.jpg"
                    alt="Your Description"
                    className="about-image"
                    style={{ borderRadius: "15px" }}
                  />
                </div>
              </Col>
              <Col md={6} className="flex-shrink-0">
                <Card.Body>
                  <Card.Title>
                    <strong>Hey My name is Josh!</strong>
                  </Card.Title>
                  <Card.Text>
                    I am a <strong>web developer and graphic designer</strong>{" "}
                    who is passionate about continuous learning and creating
                    captivating visual designs. With expertise in web
                    development, I craft interactive and user-friendly websites.
                    My love for graphic design fuels my creativity, allowing me
                    to produce visually captivating designs across platforms. I
                    am always eager to learn and stay updated with the latest
                    trends and technologies. <br />
                    <br /> <Resume />
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default AboutMe;
