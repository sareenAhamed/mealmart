import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartFoods, setCartFoods] = useState([]);

    // Calculate subtotal
    const subtotal = cartFoods.reduce((total, food) => total + food.price, 0);

    // Set delivery fee (static for now)
    const deliveryFee = cartFoods.length > 0 ? 5 : 0;
  
    // Calculate total
    const total = subtotal + deliveryFee;

  return (
    <CartContext.Provider value={{ cartFoods, setCartFoods, subtotal, deliveryFee, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
