import { Container, Form, Button } from "react-bootstrap";
import { Table } from "react-bootstrap";

function ContactPage() {
  return (
    <div
      style={{
        marginTop: "50px",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div style={{ width: "80%", padding: "20px" }}>
        <h1>
          <strong>My Contact Form</strong>
        </h1>
        <br />
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          }}
        >
          <div
            style={{
              backgroundColor: "lightGrey",
              padding: "10px",
              borderRadius: "15px",
            }}
          >
            <h3>First Name:</h3>
            <h4>&nbsp;&nbsp;Joshua</h4>
          </div>
          <br />{" "}
          <div
            style={{
              backgroundColor: "lightGrey",
              padding: "10px",
              borderRadius: "15px",
            }}
          >
            <h3>Last Name:</h3>
            <h4> &nbsp;&nbsp;Martinez</h4>
          </div>
          <br />{" "}
          <div
            style={{
              backgroundColor: "lightGrey",
              padding: "10px",
              borderRadius: "15px",
            }}
          >
            <h3>Email Name:</h3>
            <h4> &nbsp;&nbsp;Joshaumartinez1014@gmail.com</h4>
          </div>
          <br />{" "}
          <div
            style={{
              backgroundColor: "lightGrey",
              padding: "10px",
              borderRadius: "15px",
            }}
          >
            <h3>Phone Number:</h3>
            <h4> &nbsp;&nbsp;507-402-5554</h4>
          </div>
          <br />
          <div style={{ textAlign: "right" }}>
            &nbsp;&nbsp;
            <Button
              style={{ fontSize: "1.2rem" }}
              variant="primary"
              type="submit"
            >
              Email Me!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
