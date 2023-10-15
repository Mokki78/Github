import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export function Checkout() {
  const keepShopping = useNavigate();

  return (
    <div>
      <h1>Thank you for your purchase!</h1>
      <Button onClick={() => keepShopping("/")}>Continue Shopping</Button>
    </div>
  );
}
