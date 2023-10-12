import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { StoreContext } from "../../context/StoreContext";

export let CartItem = (props) => {
  let { id, title, price, imageUrl } = props.data;
  const cartItems = {
    '109566af-c5c2-4f87-86cb-76f36fb8d378': 0, 
  };
  const { addToCart, removeFromCart, updateCartItemCount } =
    useContext(StoreContext);
  return (
    <div className="cart-item">
      <div className="countHandler">
        <Button onClick={() => removeFromCart(id)}>-</Button>
        <input
          value={String(cartItems[id])}
          onChange={(e) =>
            updateCartItemCount(
              Number(e.target.value)
            )
          }
        />
        <Button onClick={() => addToCart(id)}>+</Button>
    
      </div>
    </div>
  );
};
