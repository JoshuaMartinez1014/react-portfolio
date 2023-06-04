import { Card, Button } from "react-bootstrap";
import "../styles/global.css";

function Project({ title, image, github, deploy }) {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Img variant="top" src={image} className="project-image" />
      <Card.Body>
        <Card.Title className="project-title">{title}</Card.Title>
        <div className="d-flex justify-content-between mt-3">
          <Button
            variant="dark"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </Button>
          <Button
            variant="dark"
            href={deploy}
            target="_blank"
            rel="noopener noreferrer"
          >
            Deployed Site
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Project;
