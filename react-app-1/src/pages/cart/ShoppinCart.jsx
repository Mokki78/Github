import React, { useContext } from "react";
import { CartItem } from "../cart/CartItem";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";


export const ShoppingCart = () => {
  const { cartItems, getTotalCartAmount, products } = useContext(StoreContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="Cart">
      <div>
        <h1>Your Cart items:</h1>
      </div>
      <div className="CartItems">
        {Object.keys(cartItems).map((productId) => {
          const product = products.find((p) => p.id === productId);
          console.log(cartItems)
          if (cartItems[productId] !== 0) {
            return <CartItem key={productId} data={product} />;

     
          }
          return null;
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkoutCart">
          
          <p>Subtotal: NOK {getTotalCartAmount()},-</p>
          <Button onClick={() => navigate("/")}>Continue shopping</Button>
          <Button className="bg-dark" onClick={() => navigate("/checkout")}>
            Checkout
          </Button>
        </div>
      ) : (
        <h1>Your Cart is empty</h1>
      )}
    </div>
  );
};