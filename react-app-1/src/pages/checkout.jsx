import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { Container } from "react-bootstrap";


export function Checkout() {
  const keepShopping = useNavigate();

  return (
    <>
    <Container className="p-5">
    <div className=" p-5" style={{ border: "1px solid black"}}>
      <div  className="p-2 text-center display-6 fw-bolder">
        <h1 className=" display-6 fw-bolder">Thank you for your purchase!</h1>
        </div>
      <div className="p-5">
        <p>Your package will be sent to as soon as our excellent staff has finished the retrieving and packaging of your items.
          If the package should not be in your hands by our guaranteed 14 days, or should there be any problems with your package when delivered,
          please <Link to="/contact">contact us</Link>.
          </p>
          <strong>

          Our goal is for a 100 % customer satisfaction and we will do everything we can to help you if something is not up to your standards.

        </strong>
      </div>
      <div>
        Want to <Link  to="/">keep shopping</Link> while waiting for your package? 
      </div>
       
    
      </div>

    </Container>
     </>
  );
}
