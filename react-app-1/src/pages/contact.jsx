import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();

      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      console.log("Form data:", data);
    }

    setValidated(true);
  };

  return (
    <>
      <div>
        <h1 className="display-6 fw-bolder text-center pt-2">Contact us:</h1>
      </div>
      <hr />

      <div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Container className="p-5" style={{ border: "1px solid black" }}>
            <Row>
              <Form.Group as={Col} md="8" controlId="textInput">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Subject"
                  minLength={3}
                />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="8" controlId="validationCustom01">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Full name"
                  minLength={3}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="8" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="Your email"
                    aria-describedby="inputGroupPrepend"
                    required
                    pattern="^\S+@\S+\.\S+$"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid email.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} md="8" controlId="textInput">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  style={{ height: "150px" }}
                  placeholder="Message"
                  required
                  minLength={3}
                />
                <Form.Control.Feedback type="invalid">
                  Your message to us.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Form.Group as={Col} md="8">
              <button
                className="btn btn-outline-dark"
                type="submit"
                style={{ marginTop: "10px" }}
              >
                Submit form
              </button>
            </Form.Group>
          </Container>
        </Form>
      </div>
    </>
  );
}
