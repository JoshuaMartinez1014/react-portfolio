import { Container, Form, Button } from "react-bootstrap";

function ContactForm() {
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <h1 style={{ marginLeft: "10%", textDecoration: "underline" }}>
          Projects
        </h1>
        <Container className="d-flex justify-content-center mt-3">
          <Form className="mt-3" style={{ width: "800px" }}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Your message"
                rows={3}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default ContactForm;
