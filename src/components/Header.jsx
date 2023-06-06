import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid className="d-flex">
          <Navbar.Brand href="/" className="flex-fill">
            Joshua Martinez's Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="active-link"
              >
                About
              </NavLink>
              <NavLink to="/projects" className="nav-link">
                Projects
              </NavLink>

              <NavLink to="/contactme" className="nav-link">
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
