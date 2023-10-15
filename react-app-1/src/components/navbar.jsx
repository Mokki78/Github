import React from "react";
import { Button, Container, Navbar as NavbarBs } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Search } from "./SearchBar";
import { StoreContext } from "../context/StoreContext";
import { useContext } from "react";

export function NavBar() {
  const { totalItemCount} = useContext(StoreContext);
  
  return (
    <Container>
      <NavbarBs sticky="top" className="navbar navbar-expand-lg bg-white shadow-sm">
        <Link to="/" style={{ paddingLeft: 13, textDecoration: "none" }}>
          <Button
            style={{
              width: "3rem",
              height: "3rem",
              position: "relative",
            }}
            variant="outline-dark"
            className="rounded-circle"
          >
            <Icon icon="prime:home" height="30px" />
          </Button>
        </Link>
        <Search />
        <div className="ml-auto d-flex">
          <Link to="/Contact">
            <Button
              style={{
                width: "3rem",
                height: "3rem",
                position: "relative",
              }}
              variant="outline-dark"
              className="rounded-circle"
            >
              <Icon icon="prime:envelope" height="30px" />
            </Button>
          </Link>
          <Link to="/ShoppingCart">
            <Button
              style={{
                width: "3rem",
                height: "3rem",
                position: "relative",
              }}
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
              >
                { totalItemCount()}
              </div>
            </Button>
          </Link>
        </div>
      </NavbarBs>
    </Container>
  );
}

export default NavBar;
