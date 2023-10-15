import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <>
      <Container>
        <Row>
          <Col className="bg-dark shadow-sm" style={{ height: "50px" }}>
            <footer className="d-flex align-item-center">
              <div className="footer-container">
                <NavLink to="/" className="footer-link">
                  Store
                </NavLink>
                <NavLink to="/contact" className="footer-link">
                  Contact
                </NavLink>
                <NavLink to="/shoppingcart" className="footer-link">
                  Cart
                </NavLink>
              </div>
              <div className="d-flex text-center">
                <h5 className="footer-copyright">Ecommerce @ 2023</h5>
              </div>
            </footer>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
