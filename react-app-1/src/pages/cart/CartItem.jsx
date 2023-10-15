import React, { useContext } from "react";

import { StoreContext } from "../../context/StoreContext";

export let CartItem = (props) => {
  const { id } = props.data;
  const { addToCart, removeFromCart, updateCartItemCount, cartItems } =
    useContext(StoreContext);

  const quantity = cartItems[id];

  return (
    <div className="cart-item">
      <div className="countHandler">
        <button
          className="btn btn-outline-dark btn-sm"
          onClick={() => removeFromCart(id)}
        >
          -
        </button>
        <input
          style={{ width: "50px", margin: "1px" }}
          value={String(quantity)}
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
        />
        <button
          className="btn btn-outline-dark btn-sm"
          onClick={() => addToCart(id)}
        >
          +
        </button>
      </div>
    </div>
  );
};
