import { PRODUCTS } from "../store/Products";
import { StoreContext } from "../../context/StoreContext";
import React, { useContext } from "react";
import { CartItem } from "../cart/CartItem";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const  ShoppingCart = ()  => {
   const { cartItems, getTotalCartAmount  } = useContext(StoreContext)
   const totalAmount = getTotalCartAmount();

   const navigate = useNavigate();

    return <div className="Cart">
        <div>
            <h1>Your Cart items:</h1>
        </div>
        <div className="CartItems">
            {PRODUCTS.map((Product) => {
                if ( cartItems[Product.id] !== 0 ) {
                    return <CartItem data={Product}/>;
                  }
                  
            })}
         </div>
         {totalAmount > 0 ?
        <div className="checkoutCart">
            <p>Subtotal: NOK {getTotalCartAmount()},-</p>
            <Button onClick={() => navigate("/")}>Continue shopping</Button>
          <Button className="bg-dark" onClick={() => navigate("/checkout")}>Checkout</Button>
     </div>
    : <h1>Your Cart is empty</h1>}
   </div>
}