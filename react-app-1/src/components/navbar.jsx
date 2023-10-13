import { Button, Container, Navbar as NavbarBs } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Search } from "../components/SearchBar";
import { StoreContext } from "../context/StoreContext";
import { useContext } from "react";

 
export function NavBar() {
  const {  getTotalCartAmount } = useContext(StoreContext);
  const totalAmount = getTotalCartAmount();
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
          <li className="navbar-search me-auto mb-4 mb-lg-10">
            <Search />
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
              <Icon icon="prime:shopping-cart" height="30px" style={{ height: "1.5rem" }}/>{totalAmount}
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
