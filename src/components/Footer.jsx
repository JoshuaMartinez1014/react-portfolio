import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/global.css";
import github from "../img/github-sign.png";
import twitter from "../img/twitter.png";
import linkedin from "../img/linkedin.png";

function Footer() {
  return (
    <footer className="footer bg-light text-center py-3">
      <Container>
        <Row>
          <Col className="text-muted">
            <a href="https://github.com/JoshuaMartinez1014" target="_blank">
              <img
                className="footer-img"
                src={github}
                style={{ height: "30px", marginRight: "20px" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/
joshua-martinez1014
"
              target="_blank"
            >
              <img
                className="footer-img"
                src={linkedin}
                style={{ height: "30px", marginRight: "20px" }}
              />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
