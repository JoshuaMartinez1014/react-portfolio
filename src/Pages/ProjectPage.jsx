import { Container, Form, Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import gradebook from "../img/gradebook-screenshot.png";
import techblog from "../img/tech-blog.png";
import "../styles/global.css";

function ProjectPage() {
  return (
    <>
      <div className="homepage-container">
        <div className="homepage-section" style={{ marginTop: "40px" }}>
          <p
            style={{
              fontSize: "20px",
            }}
          >
            <div style={{ fontSize: "3rem", lineHeight: "60px" }}>
              <strong>Gradebook</strong>
            </div>
            <br />
            <p style={{ fontSize: "17px" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;This application exhibits a student's
              grades in a simple and organized manner. The overall goal of the
              application is to organize grade information in a way that makes
              sense and can be quickly viewed by users. Grades can be seen by a
              user that is a teacher or a student. New users must sign up to
              access most of the application and returning users can log in. The
              server-side code is heavily dependent on Express, MongoDB, and
              Mongoose while the client-side mainly uses React. There are four
              models used in the creation of this application: User, Grade,
              Class, and Assignment.
            </p>
            <button className="main-content-button">GitHub</button>
            <button className="main-content-button">Live Site</button>
          </p>
        </div>
        {/*  */}
        <div
          className="homepage-section"
          style={{ marginTop: "40px", width: "50%" }}
        >
          <img
            src={gradebook}
            style={{ height: "350px", width: "700px" }}
          ></img>
        </div>
        {/*  */}
      </div>{" "}
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
            }}
          >
            <div style={{ fontSize: "3rem", lineHeight: "60px" }}>
              <strong>Tech Blog</strong>
            </div>
            <br />
            <p style={{ fontSize: "17px" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;Create a site where users can come
              together and discuss relevent tech information in the form of
              blogging. The user can make their own posts, or comment on other
              posts. The site will be able to keep user information by allowing
              users to create accounts and logging into them.
            </p>
            <button
              className="main-content-button"
              style={{
                color: "rgb(17,180,242)",
                backgroundColor: "white",
                border: "solid 2px rgb(17,180,242)",
              }}
            >
              GitHub
            </button>
            <button
              className="main-content-button"
              style={{
                color: "rgb(17,180,242)",
                backgroundColor: "white",
                border: "solid 2px rgb(17,180,242)",
              }}
            >
              Live Site
            </button>
          </p>
        </div>
        {/*  */}
        <div
          className="homepage-section"
          style={{ marginTop: "40px", width: "50%" }}
        >
          <img src={techblog} style={{ height: "375px", width: "700px" }}></img>
        </div>
        {/*  */}
      </div>
    </>
  );
}
export default ProjectPage;
