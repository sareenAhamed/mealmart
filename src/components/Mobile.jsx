import React from "react";
import android from '../assets/android.png'
import ios from '../assets/ios.png'


const Mobile = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white my-16">
      <h2 className="text-4xl font-semibold text-gray-800 text-center">
        For better experience download
      </h2>
      <h1 className="text-2xl font-bold text-black mt-8 mb-4">MealMart App</h1>
      <div className="flex gap-4">
        <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
          <img
            src={android}
            alt="Google Play"
            className="h-12"
          />
        </a>
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <img
            src={ios}
            alt="App Store"
            className="h-12"
          />
        </a>
      </div>
    </div>
  );
};

export default Mobile;
