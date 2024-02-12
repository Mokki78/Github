import React, { useContext } from "react";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { formatCurrency } from "../../utilities/formatCurrency";

export const ShoppingCart = () => {
  const { cartItems, products, clearCart } = useContext(StoreContext);
  const navigate = useNavigate();

  let savings = 0;

  const totalAmount = Object.keys(cartItems).reduce((total, productId) => {
    const product = products.find((p) => p.id === productId);
    const quantity = cartItems[productId];
    if (product && quantity > 0) {
      total += quantity * product.price;

      if (product.discountedPrice < product.price) {
        savings += quantity * (product.price - product.discountedPrice);
      }
    }
    return total;
  }, 0);

  return (
    <div className=" p-5" style={{ border: "1px solid black" }}>
      <div className="p-2 text-center display-6 fw-bolder">
        <h1 className=" display-6 fw-bolder">Your Cart items:</h1>
        <hr />
      </div>
      <div className="shopping-cart-container">
        <button
          className="btn clear-cart-button"
          onClick={() => {
            clearCart();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-x-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
          </svg>
        </button>
      </div>

      <div className="CartItems">
        {Object.keys(cartItems).map((productId) => {
          const product = products.find((p) => p.id === productId);

          if (product && cartItems[productId] > 0) {
            return (
              <div key={productId}>
                <strong className="d-flex text-center">{product.title}</strong>
                <div>
                  <img
                    src={product.imageUrl}
                    height="130px"
                    alt={product.title}
                  />
                  <CartItem data={product} />
                  <p>Price: NOK {formatCurrency(product.price)},-</p>
                  <p>
                    Savings: NOK{" "}
                    {formatCurrency(savings)},-
                  </p>

                  <strong>
                    Total Price: NOK{" "}
                    {formatCurrency(totalAmount - savings)},-
                  </strong>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>

      {totalAmount === 0 ? (
        <h1>Your Cart is empty</h1>
      ) : (
        <div>
          <hr />
          <div
            className="d-flex flex-row p-3"
            style={{ border: "1px solid black" }}
          >
            <div className="d-flex flex-column px-5 bg-white pt-3">
              <strong>Subtotal: {formatCurrency(totalAmount - savings)},-</strong>
              <span>Savings: NOK {formatCurrency(savings)},-</span>
            </div>

            <div className="cart-buttons-container">
              <button
                className="btn btn-outline-dark cart-buttons"
                onClick={() => {
                  clearCart();
                  navigate("/checkout");
                }}
              >
                Checkout
              </button>
            </div>
            <div className="p-1">
              <button
                className="btn btn-outline-dark cart-buttons"
                onClick={() => navigate("/")}
              >
                Continue shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
