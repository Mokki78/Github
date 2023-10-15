import React, { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

const getDefaultCart = (products) => {
  let cart = {};
  for (let i = 0; i < products.length; i++) {
    cart[products[i].id] = 0;
  }
  return cart;
};

export const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [ cartItemCount, setCartItemCount] = useState(false);
  

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://api.noroff.dev/api/v1/online-shop/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
        setCartItems(getDefaultCart(data));
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        console.error("Error fetching product data:", error);
      }
    }

    fetchProducts();
  }, []);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const quantity = cartItems[itemId];

      if (quantity > 0) {
        const productId = Number(itemId);
        const itemInfo = products.find((product) => product.id === productId);

        if (itemInfo) {
          totalAmount += quantity * itemInfo.price;
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItemCount = () => {
    
    let totalCount = 0;
    for (const itemId in cartItems) {
      totalCount += cartItems[itemId];
    }
    return totalCount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      return {
        ...prev,
        [itemId]: prev[itemId] + 1,
      };
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    newAmount = Number(newAmount);

    if (isNaN(newAmount)) {
      return;
    }

    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const clearCart = () => {
    setCartItems(getDefaultCart(products));
    setCartItemCount(0);
  };


  const contextValue = {
    cartItems,
    products,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    totalAmount: getTotalCartAmount,
    totalItemCount: getTotalCartItemCount,
    clearCart,
    cartItemCount,
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>An error occurred while fetching data.</p>;
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
