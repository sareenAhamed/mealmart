import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartFoods, setCartFoods] = useState([]);

  return (
    <CartContext.Provider value={{ cartFoods, setCartFoods }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
