import React, { useContext } from "react";
import { CartItem } from "../cart/CartItem";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import {  formatCurrency } from "../../utilities/formatCurrency";

export const ShoppingCart = () => {
  const { cartItems, getTotalCartAmount, products } = useContext(StoreContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className=" p-5" style={{ border: "1px solid black"}}>
      <div  className="p-2 text-center display-6 fw-bolder">
        <h1 className=" display-6 fw-bolder">Your Cart items:</h1>
        <hr />
      </div>

      <div className="CartItems">
        {Object.keys(cartItems).map((productId) => {
          const product = products.find((p) => p.id === productId);

          if (product && cartItems[productId] > 0) {
            return (
              <div key={productId}>
             
                <div>
                  <img
                    src={product.imageUrl}
                    height="130px"
                    alt={product.title}
                  />
                  <br />
                  
                  <strong>Product: {product.title}</strong>
                  <br />
                
                  <p>Price: NOK {product.price },-</p>
               
                  <CartItem data={product} />

                  <strong>
                    Total Price: NOK {formatCurrency(product.price * cartItems[productId])},-
                  </strong>
                </div>
                <hr />
             
              </div>
            );
          }
          return null;
        })}
      </div>

      {totalAmount > 0 ? (
        <h1>Your Cart is empty</h1>
      ) : (
        <div className="checkoutCart">
          <p>Subtotal: NOK {getTotalCartAmount()},-</p>
          <Button onClick={() => navigate("/")}>Continue shopping</Button>
          <Button className="bg-dark" onClick={() => navigate("/checkout")}>
            Checkout
          </Button>
        </div>
      )}
    </div>
  );
};
