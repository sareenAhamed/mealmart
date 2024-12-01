import React from "react";
import bg from "../assets/home.png";
import { Element } from "react-scroll";



const Home = () => {
  return (
    <Element name="home">
      <div
        className="h-[500px] flex items-center justify-center text-white mx-10 mt-5 -z-0 md:mt-16"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "15px",
        }}
      >
        <div className="p-14 rounded-lg bg-black opacity-70 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug text-white">
            Satisfy Your Cravings Today.
          </h1>
          <p className="text-md mt-4">
            Explore a rich selection of delicious dishes, thoughtfully prepared
            with premium ingredients and culinary passion. Let us take your
            dining experience to the next level with every flavorful bite.
          </p>
          <button className="mt-6 px-6 py-2 text-sm md:text-base bg-white text-daraz font-semibold rounded-full hover:bg-daraz hover:text-white transition-all duration-300">
            View Menu
          </button>
        </div>
      </div>
    </Element>
  );
};

export default Home;
