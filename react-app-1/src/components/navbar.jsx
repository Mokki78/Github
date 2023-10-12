import { Button, Container, Navbar as NavbarBs } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export function NavBar() {
  return (
    <Container>
      <NavbarBs
        sticky="top"
        className="navbar navbar-expand-lg bg-white shadow-sm mb-3"
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li>
            <Link to="/">Store</Link>
          </li>
          <li>
            <Link to="/Contact"><Button  style={{ width: "3rem", height: "3rem", position: "relative" }}
              variant="outline-dark"
              className="rounded-circle"><Icon icon="prime:envelope" height="30px" />
           </Button></Link>
          </li>
        </ul>
        <li>
          <Link to="/ShoppingCart">
            <Button
              style={{ width: "3rem", height: "3rem", position: "relative" }}
              variant="outline-dark"
              className="rounded-circle"
            >
              <Icon icon="prime:shopping-cart" height="30px" />
            <div
                className="rounded-circle d-flex justify-content-center bg-danger align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(25%, 25%)",
                }}
              ></div>
            </Button>
          </Link>
        </li>
      </NavbarBs>
    </Container>
  );
}

export default NavBar;
