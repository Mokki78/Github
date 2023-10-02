
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";
import { Button } from "react-bootstrap";


export const Product = (props) => {
    const { id , title, price, productImg} = props.data;
    const { addToCart, cartItems } = useContext(StoreContext)   
    
    const cartItemAmount = cartItems[id];
    
    return  (
       <div classname="product">
        <h3>{title}</h3>
         <img src={productImg} height="200px" alt="product"></img>
         <p>NOK {price},-</p>
         <Button className="addToCartBtn bg-dark" onClick={() => addToCart(id)}>Add to cart { cartItemAmount > 0 && <>({cartItemAmount})</>}</Button>
     </div>
     )
    
}