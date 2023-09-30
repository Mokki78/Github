 import { Button, Card, Container } from "react-bootstrap";
import React, { useReducer, useEffect } from 'react';



 export const initialState = { cart: [], total: 0, products: [] };

export function cartReducer(state, action) {
  let productIndex;
  let newTotal;
  let cart;

 

  switch (action.type) {

  
   
    case 'addProduct':
    
      cart = [...state.cart];
    
      productIndex = cart.findIndex(
        (product) => product.id === action.payload.id,
      );
      if (productIndex === -1) {
    
        cart.push({ ...action.payload, quantity: 1 });
      } else {
        
        cart = [
          ...cart.slice(0, productIndex),
          { ...cart[productIndex], quantity: cart[productIndex].quantity + 1 },
          ...cart.slice(productIndex + 1),
        ];
      }

      newTotal = cart.reduce((currentTotal, product) => {
        currentTotal += product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);
      return { ...state, cart: cart, total: newTotal };

    case 'removeProduct':
      cart = [...state.cart];
  
      productIndex = cart.findIndex(
        (product) => product.id === action.payload.id,
      );
    
      if (productIndex !== -1) {
        if (cart[productIndex].quantity > 1) {
        
          cart = [
            ...cart.slice(0, productIndex),
            {
              ...cart[productIndex],
              quantity: cart[productIndex].quantity - 1,
            },
            ...cart.slice(productIndex + 1),
          ];
        } else {
         
          cart = [
            ...cart.slice(0, productIndex),
            ...cart.slice(productIndex + 1),
          ];
        }
      }
     
      newTotal = cart.reduce((currentTotal, product) => {
        currentTotal += product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);
      return { ...state, cart: cart, total: newTotal };

   
    case 'clearCart':
      return {...state, cart: [], total: 0 };

    default:
      return state;

    
    
    }

}




export function Cart() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  
    useEffect(() => {
      async function fetchProducts(dispatch) {
        try {
          const response = await fetch("https://api.noroff.dev/api/v1/online-shop/");
          const data = await response.json();
          console.log(data);
          dispatch({ type: "setProducts", payload: data });
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      }
   
      fetchProducts(dispatch);
    }, []); 
  
  return (
    <Container>
        <Card.Body className="h-100">
      {state.products.map((product) => (
        <div key={product.id}>
            <img  src={product.imageUrl} height="200px" alt="product"></img>
          
          <Button
            onClick={() => dispatch({ type: 'addProduct', payload: product })}
          >
              <Card.Title className="d-flex align-items-baseline mb-4">Add{product.title}</Card.Title>
          </Button>
          <Button
            onClick={() =>
              dispatch({ type: 'removeProduct', payload: product })
            }
          >
            Remove {product.title}
          </Button>
        </div>
      ))}
      <div>
        <hr />
        <Button className="bg-dark" onClick={() => dispatch({ type: 'clearCart' })}>
          Clear cart
        </Button>
        <Button className="bg-dark" onClick={() => dispatch({ type: 'getTotal' })}>
          Get total
        </Button>
      </div>
      <div>{state.total}</div>
      <hr />
      <div>
        {state.cart.map((product) => (
          <div key={product.id}>
            {product.quantity} - {product.title} - {product.discountedPrice}
          </div>
        ))}
      </div>
      </Card.Body>
    </Container>
  );
}

export default Cart;



