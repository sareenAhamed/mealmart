import React from "react";
import {dishes} from '../../assets/Dishes'



const MenuItems = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Explore the best dishes around you</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dishes.map((dish) => (
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
              <p className="text-sm text-gray-600 mt-1">{dish.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-daraz">
                  {dish.price}
                </span>
                <div className="flex items-center text-daraz">
                  {"★".repeat(Math.floor(dish.rating))}
                  {dish.rating % 1 !== 0 && "☆"}
                </div>
              </div>
              <button className="mt-2 w-full py-2 px-4 text-white bg-daraz rounded-lg hover:bg-orange-400">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
