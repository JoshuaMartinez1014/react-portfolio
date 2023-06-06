import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/global.css";
import github from "../img/github-sign.png";
import twitter from "../img/twitter.png";
import linkedin from "../img/linkedin.png";

function Footer() {
  return (
    <footer className="footer bg-dark text-center py-3">
      <Container>
        <Row>
          <Col className="text-muted">
            <a href="#">
              <img
                className="footer-img"
                src={github}
                style={{ height: "30px", marginRight: "20px" }}
              />
            </a>
            <a href="#">
              <img
                className="footer-img"
                src={linkedin}
                style={{ height: "30px", marginRight: "20px" }}
              />
            </a>
            <a href="#">
              <img
                className="footer-img"
                src={twitter}
                style={{ height: "30px" }}
              />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
