import React, { useState, useContext } from "react";
import cake from "../../assets/cake/cake.jpg";
import dessert from "../../assets/dessert/dessert.jpg";
import noodles from "../../assets/noodles/noodles.jpg";
import pasta from "../../assets/pasta/pasta.jpg";
import rolls from "../../assets/rolls/rolls.jpg";
import salad from "../../assets/salad/salad.jpg";
import sandwich from "../../assets/sandwhich/sandwich.jpg";
import veg from "../../assets/veg/veg.jpeg";
import { dishes } from "../../assets/Dishes";
import { CartContext } from '../../context/cartContext'

const MenuItems = () => {
  const [foodList] = useState([
    { image: cake, name: "Cake", type: "cake" },
    { image: dessert, name: "Dessert", type: "dessert" },
    { image: noodles, name: "Noodles", type: "noodles" },
    { image: pasta, name: "Pasta", type: "pasta" },
    { image: rolls, name: "Rolls", type: "rolls" },
    { image: salad, name: "Salad", type: "salad" },
    { image: sandwich, name: "Sandwich", type: "sandwich" },
    { image: veg, name: "Pure Veg", type: "veg" },
  ]);

  const [foodType, setFoodType] = useState("");  // Default empty type, can be modified for 'All' category
  const { cartFoods, setCartFoods } = useContext(CartContext);

  // State to track added items
  const [addedToCart, setAddedToCart] = useState(new Set());

  // Function to add a dish to the cart
  const addCart = (dish) => {
    setCartFoods((prevCart) => [...prevCart, dish]);
    setAddedToCart((prev) => new Set(prev.add(dish.id))); // Track added dish by id
  };

  return (
    <div>
      {/* Category Filter Section */}
      <div className="container mx-auto flex justify-around overflow-x-auto scrollbar-hide scroll-snap-x mandatory mt-5 ps-5 md:ps-0">
        {foodList.map((food, index) => (
          <div
            key={index}
            className="mx-2 flex-col p-2 scroll-snap-start"
            onClick={() => setFoodType(food.type)} // Set selected food category
          >
            <img
              className={`h-32 w-32 rounded-full cursor-pointer transition-all hover:border-4 hover:border-daraz hover:p-2 ${
                foodType === food.type ? " border-4 border-daraz p-2" : ""
              }`}
              src={food.image}
              alt={food.name}
            />
            <p className="text-black opacity-80 font-semibold mx-10">{food.name}</p>
          </div>
        ))}
      </div>

      <hr className="my-4 border-t-2 border-gray-200" />

      {/* Dish Display Section */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6">
          Explore the best dishes around you
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes
            .filter((dish) => foodType === dish.category || foodType === "")
            .map((dish) => (
              <div
                key={dish.id}
                className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-lg"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{dish.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {dish.description}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-daraz">${dish.price}</span>
                    <div className="flex items-center text-daraz">
                      {"★".repeat(Math.floor(dish.rating))}
                      {dish.rating % 1 !== 0 && "☆"}
                    </div>
                  </div>
                  <button
                    className={`mt-2 w-full py-2 px-4 text-white rounded-lg ${
                      addedToCart.has(dish.id)
                        ? "bg-green-500 hover:bg-green-400"
                        : "bg-daraz hover:bg-orange-400"
                    }`}
                    onClick={() => addCart(dish)}
                  >
                    {addedToCart.has(dish.id) ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
