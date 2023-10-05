import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import  Container from  "react-bootstrap/Container";

export function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Container className="d-flex flex-column mx-auto">
      <Row >
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
          <Form.Control type="textarea" style={{ height: '150px' }} placeholder="Message" required   minLength={3} />
          <Form.Control.Feedback type="invalid">
            Your message to us.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-8">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        
        />
      </Form.Group >
      <Form.Group as={Col} md="8" >
      <Button className='btn btn-outline-dark'type="submit">Submit form</Button>
      </Form.Group>
      </Container>
    </Form>
  );
}

export default Contact;