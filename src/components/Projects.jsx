import { Container, Row, Col } from "react-bootstrap";
import Project from "./Project";
import "../styles/global.css";

function Projects() {
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <h1 style={{ marginLeft: "10%", textDecoration: "underline" }}>
          Projects
        </h1>
        <Container className="my-5">
          <Row>
            <Col lg={4} md={6} xs={12}>
              <Project
                title="Tech Blog 1"
                image="..\img\jmart-tech-blog.herokuapp.com_.png"
                deploy="https://jmart-tech-blog.herokuapp.com/"
                github="https://github.com/JoshuaMartinez1014/tech_blog"
              />
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Project
                title="Tech Blog 2"
                image="..\img\jmart-tech-blog.herokuapp.com_.png"
                deploy="https://jmart-tech-blog.herokuapp.com/"
                github="https://github.com/JoshuaMartinez1014/tech_blog"
              />
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Project
                title="Tech Blog 3"
                image="..\img\jmart-tech-blog.herokuapp.com_.png"
                deploy="https://jmart-tech-blog.herokuapp.com/"
                github="https://github.com/JoshuaMartinez1014/tech_blog"
              />
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Project
                title="Tech Blog 1"
                image="..\img\jmart-tech-blog.herokuapp.com_.png"
                deploy="https://jmart-tech-blog.herokuapp.com/"
                github="https://github.com/JoshuaMartinez1014/tech_blog"
              />
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Project
                title="Tech Blog 2"
                image="..\img\jmart-tech-blog.herokuapp.com_.png"
                deploy="https://jmart-tech-blog.herokuapp.com/"
                github="https://github.com/JoshuaMartinez1014/tech_blog"
              />
            </Col>
            <Col lg={4} md={6} xs={12}>
              <Project
                title="Tech Blog 3"
                image="..\img\jmart-tech-blog.herokuapp.com_.png"
                deploy="https://jmart-tech-blog.herokuapp.com/"
                github="https://github.com/JoshuaMartinez1014/tech_blog"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Projects;
