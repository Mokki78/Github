import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Footer() {
return (
  <>
<Container>
  <Row>
    <Col className="bg-white shadow-sm" style={{ height: "100px"}}>
  <footer className="d-flex align-item-center">
    <p>Ecommerce @ 2023</p>
    <NavLink to="/" className="p-2 me-auto" style={{ paddingLeft: 13, textDecoration: "none" }}>Home
    </NavLink></footer>
  </Col>
  </Row>
  </Container>
  </>
)
}

export default Footer;