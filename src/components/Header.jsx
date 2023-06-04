import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header(props) {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid className="d-flex">
          <Navbar.Brand href="#home" className="flex-fill">
            Joshua Martinez's Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
