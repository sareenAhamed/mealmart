import React, { createContext, useState, useEffect } from "react";

// Create CartContext to be used in other components
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartFoods, setCartFoods] = useState(() => {
    // Try to get cart data from local storage on page load
    const savedCart = localStorage.getItem("cartFoods");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Persist cart to localStorage whenever cartFoods changes
    localStorage.setItem("cartFoods", JSON.stringify(cartFoods));
  }, [cartFoods]);

  // Calculate subtotal
  const subtotal = cartFoods.reduce((total, food) => total + food.price, 0);

  // Dynamic delivery fee (for example, based on the cart size)
  const deliveryFee = cartFoods.length > 0 ? 5 : 0; // Can be adjusted based on conditions like cart size, location

  // Calculate total
  const total = subtotal + deliveryFee;

  // Function to remove a food item from the cart
  const removeFromCart = (dish) => {
    setCartFoods((prevCart) => prevCart.filter((item) => item.id !== dish.id));
  };

  // Function to update the quantity of a food item in the cart (if applicable)
  const updateQuantity = (dish, quantity) => {
    setCartFoods((prevCart) =>
      prevCart.map((item) =>
        item.id === dish.id ? { ...item, quantity: quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartFoods,
        setCartFoods,
        subtotal,
        deliveryFee,
        total,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
