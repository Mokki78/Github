import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { SingleProduct } from "../src/pages/SingleProduct";
import { Checkout } from "./pages/Checkout";
import { Contact } from "./pages/Contact";
import { PageNotFound } from "./pages/PageNotFound";
import { NavBar } from "./components/Navbar";
import { Store } from "./pages/store/Store";
import { StoreContextProvider } from "./context/StoreContext";
import { ShoppingCart } from "./pages/cart/ShoppinCart";
import { Footer } from "../src/components/Footer";


function Header() {
  return (
    <header>
      <div></div>
      <NavBar />
    </header>
  );
}



function App() {
  return (
    <>
      <StoreContextProvider>
        <Container class="mb-4">
          <Header />

          <Routes>
            <Route path="/" index element={<Store />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Container>
      </StoreContextProvider>  
    </>
  );
}

export default App;
