import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { StoreContext } from "../../context/StoreContext";



export let CartItem = (props) => {
 
    let { id, title, price, productImg} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount  } = useContext(StoreContext)
    return (
        <div className="cart-item">
        <img src={productImg} height="200px" alt="product" />
            <div className="description">
                <p>
                    { " " } 
                    <b>{title}</b>
                </p>
                <p>NOK {price},-</p>
         
            <div classname="countHandler">
               <Button onClick={() => removeFromCart(id)}>-</Button>
               <input value={cartItems[id]}  onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
               <Button onClick={() => addToCart(id)}>+</Button>
           </div>
        </div>
    </div>
    )
}