import React from "react";


const Contact = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <div className="flex items-center">
            <h1 className="text-daraz text-3xl font-bold">MealMart.</h1>
          </div>
          <p className="text-sm mt-4 leading-relaxed text-justify">
          MealMart is a leading e-commerce platform specializing in delivering a wide variety of delicious, high-quality foods. From freshly prepared meals to premium packaged cuisines, MealMart ensures every bite is flavorful and satisfying. With a commitment to convenience and speedy delivery, MealMart caters to food lovers seeking hassle-free dining solutions for any occasion.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook" className="hover:text-daraz text-2xl">
              <ion-icon name="logo-facebook"></ion-icon>
      
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-daraz text-2xl">
              <ion-icon name="logo-twitter"></ion-icon>
              
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-daraz text-2xl">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div className="flex-1 mb-0 md:mb-10">
          <h2 className="text-white font-semibold text-lg mb-4">COMPANY</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-daraz">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-daraz">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-daraz">Delivery</a>
            </li>
            <li>
              <a href="#" className="hover:text-daraz">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex-1 mb-0 md:mb-24">
          <h2 className="text-white font-semibold text-lg mb-4">GET IN TOUCH</h2>
          <p className="text-sm mb-2">+94757922573</p>
          <p className="text-sm">info@mealmart.com</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-center text-sm">
          Copyright 2024 © MealMart.com - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
