import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import brand from "../img/brand.svg";

import "../styles/global.css";

function HomePage(props) {
  return (
    <>
      <div className="homepage-container">
        <div className="homepage-section">
          <p
            style={{
              fontSize: "20px",
            }}
          >
            Hello, I am a{" "}
            <span style={{ color: "rgb(17,180,242)" }}>Web Developer</span>
            <div style={{ fontSize: "3rem", lineHeight: "60px" }}>
              <strong>
                Joshua <br />
                Martinez
              </strong>
            </div>
            <br />
            <p style={{ color: "gray", fontSize: "17px" }}>
              I'm deeply passionate about web development, creating digital
              experiences that seamlessly blend creativity and technical
              proficiency. Leveraging a solid foundation in CSS, JavaScript, and
              React, I excel in delivering visually compelling websites and
              relish problem-solving opportunities. Dedicated to staying current
              with industry trends and technologies, I infuse each project with
              fresh ideas and innovative solutions.
            </p>
          </p>
          <span>
            <button className="main-content-button">Hire Me</button>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ color: "rgb(17,180,242)", fontSize: "20px" }}>
              {" "}
              Download my Resume &nbsp;&nbsp;&gt;
            </span>
          </span>
        </div>
        <div id="main-content-image"></div>
      </div>
      {/*  ^ Top Section ^ */}{" "}
      <div
        className="homepage-container"
        style={{
          height: "500px",
          marginTop: "50px",
          backgroundColor: "rgb(17,180,242)",
        }}
      >
        <div className="homepage-section" style={{ marginTop: "40px" }}>
          <p
            style={{
              fontSize: "20px",
              color: "white",
            }}
          >
            <div style={{ fontSize: "3rem", lineHeight: "60px" }}>
              <strong>About Me</strong>
            </div>
            <br />
            <p style={{ color: "white", fontSize: "17px" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;Hello! I'm a dedicated individual with a
              love for{" "}
              <strong>
                movies, video games, and spending quality time with friends.
              </strong>{" "}
              As someone who is both <strong>creative and analytical</strong>, I
              find joy in both designing and coding, blending my artistic
              sensibilities with technical expertise. I reside in{" "}
              <strong>Hutchinson, Minnesota</strong>, appreciating the peaceful
              surroundings and ok weather.
              <br /> &nbsp;&nbsp;&nbsp;&nbsp;During my free time, you can often
              find me enjoying{" "}
              <strong>
                casual rock climbing, enjoying the outside, or listening to
                music.
              </strong>{" "}
              I approach my work with a meticulous attention to detail,
              constantly seeking ways to <strong>refine and improve.</strong>{" "}
              I'm eager to collaborate with fellow professionals who share my
              passion for creating meaningful digital experiences grounded in
              practicality and functionality.
            </p>
          </p>
        </div>
        {/*  */}
        <div className="homepage-section" style={{ marginTop: "40px" }}>
          <p
            style={{
              fontSize: "20px",
              color: "white",
            }}
          >
            <div style={{ fontSize: "3rem", lineHeight: "60px" }}>
              <strong>Expertise</strong>
            </div>
            <br />
            <p style={{ color: "white", fontSize: "17px" }}>
              {" "}
              <p style={{ color: "white", fontSize: "17px" }}>
                <span
                  className="homepage-skill-btn"
                  style={{ backgroundColor: "orange", color: "black" }}
                >
                  Javascript
                </span>
                <span
                  className="homepage-skill-btn"
                  style={{ backgroundColor: "blue", color: "white" }}
                >
                  React
                </span>
                <span
                  className="homepage-skill-btn"
                  style={{ backgroundColor: "purple", color: "black" }}
                >
                  MySql
                </span>
                <br />
                <br />
                <span
                  className="homepage-skill-btn"
                  style={{ backgroundColor: "red", color: "white" }}
                >
                  MongoDb
                </span>
                <span
                  className="homepage-skill-btn"
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  Node
                </span>
                <span
                  className="homepage-skill-btn"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  Illustrator
                </span>
                <br />
                <br />
                <span
                  className="homepage-skill-btn"
                  style={{ backgroundColor: "green", color: "black" }}
                >
                  Photoshop
                </span>
                <span
                  className="homepage-skill-btn"
                  style={{ backgroundColor: "yellow", color: "black" }}
                >
                  PremierPro
                </span>
              </p>
            </p>
          </p>
        </div>
        {/*  */}
      </div>{" "}
      <div
        style={{
          height: "400px",
          marginTop: "50px",
          backgroundColor: "",
        }}
      ></div>
    </>
  );
}

export default HomePage;
