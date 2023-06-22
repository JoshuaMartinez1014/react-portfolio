import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import brand from "../img/brand.svg";
import "../styles/global.css";

function Header(props) {
  return (
    <>
      <header>
        <Navbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "rgb(254, 255, 248)",
            position: "sticky",
            top: 0,
            zIndex: 10,
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div>
            <NavLink to="/" style={{}}>
              <img src={brand} style={{ height: "40px" }} />
            </NavLink>
          </div>

          <div>
            <Nav className="nav-links">
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="active-link"
              >
                Home
              </NavLink>
              <NavLink to="/projects" className="nav-link">
                Projects
              </NavLink>
              <NavLink to="/Resume" className="nav-link">
                Resume
              </NavLink>
            </Nav>
          </div>

          <div>
            <NavLink
              style={{
                backgroundColor: "rgb(17,180,242)",
                borderRadius: "25px",
                color: "black",
                fontWeight: "bolder",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
              }}
              to="/contactme"
              className="nav-link"
            >
              Get in Touch
            </NavLink>
          </div>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Navbar>
      </header>
    </>
  );
}

export default Header;
