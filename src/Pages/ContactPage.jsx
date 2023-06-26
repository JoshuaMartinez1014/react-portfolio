import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import profilePic from "../img/MainProfile1.png";
import emailjs from "emailjs-com";
import { Alert } from "react-bootstrap";

function ContactPage() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("danger");

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAIL_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          setAlertMessage(
            "There was an error sending your message. Please try again."
          );
          setAlertVariant("danger");
          setShowAlert(true);
        }
      );
    e.target.reset();
  }

  return (
    <div className="homepage-container">
      <div className="contact-section">
        <h1>
          <strong>My Contact Form</strong>
        </h1>
        <img
          src={profilePic}
          style={{
            width: "80%",
            borderRadius: "20px",
            marginBottom: "40px",
          }}
        />
        <Table className="conact-table" bordered hover>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Joshua Martinez</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>355 Ottawa Ave Se, Hutchinson, MN</td>
            </tr>
            <tr>
              <td>Mobile</td>
              <td>507-402-5554</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>Joshaumartinez1014@gmail.com</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="contact-form">
        <Form onSubmit={sendEmail}>
          <Form.Group controlId="formFirstName">
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              required
            />
          </Form.Group>
          <Form.Group controlId="formLastName">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              name="email"
              required
            />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Message:</Form.Label>
            <Form.Control as="textarea" rows={3} name="message" required />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>{" "}
          <br />
          <Alert
            variant={alertVariant}
            show={showAlert}
            onClose={() => setShowAlert(false)}
            dismissible
          >
            {alertMessage}
          </Alert>
        </Form>
      </div>
    </div>
  );
}

export default ContactPage;
