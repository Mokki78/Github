import React, { createContext, useState, useEffect } from "react";
import { Products } from "../data/FetchProducts";


export const StoreContext = createContext();

const getDefaultCart = () => {
    let cart = {}
    for (let i =1; i < Products.length; i++) {
        cart[i] = 0;
    }
    return cart;

}
export const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
          try {
            const response = await fetch("https://api.noroff.dev/api/v1/online-shop/");
            const data = await response.json();
            setProducts(data); 
          } catch (error) {
            console.error("Error fetching product data:", error);
          }
        }
    
        fetchProducts();
      }, []); 

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if( cartItems[item] > 0) {
                let itemInfo = Products.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount;
    }  

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
 }

    const updateCartItemCount = (newAmount, itemId) => {
        newAmount = Number(newAmount);
  
        if (isNaN(newAmount)) {
    
          return;
        }
      
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
      };
   

 const contextValue = {cartItems,  products, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount };


    return <StoreContext.Provider value={contextValue}> 
     {props.children}
    </StoreContext.Provider>
}

export default StoreContextProvider;