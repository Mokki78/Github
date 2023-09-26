import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/home";
import { Product } from "./pages/product";
import { Cart } from "./pages/cart";
import { Checkout } from "./pages/checkout";
import { Contact } from "./pages/contact";
import { PageNotFound } from "./pages/pagenotfound";
import { NavBar } from "./components/navbar";

function App() {
  return (
    <Container class="mb-4">
      <NavBar />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/product:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
