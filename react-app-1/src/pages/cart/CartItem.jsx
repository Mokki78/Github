import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { StoreContext } from "../../context/StoreContext";



export let CartItem = (props) => {
 
    let { id, title, price, imageUrl } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount  } = useContext(StoreContext)
    return (
     
        <div className="cart-item">
       <div classname="countHandler">
       
               <Button onClick={() => removeFromCart(id, title, price, imageUrl)}>-</Button>
               <input value={String(cartItems[id, title, price, imageUrl])} onChange={(e) => updateCartItemCount(Number(e.target.value), id, title, price, imageUrl)} />
               <Button onClick={() => addToCart(id, title, price, imageUrl)}>+</Button>
               
           </div>
        </div>
    
    )
}