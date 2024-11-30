import React from 'react';
import MenuItems from './menu/MenuItems';
import { Element } from 'react-scroll';

const Menu = () => {
  return (
    <Element name="menu">
      <div className="container mx-auto -z-40 mt-12 pt-28">
        <div>
          <h3 className="text-4xl font-semibold my-7 font-poppins md:ps-0 ps-10">
            Discover Our Menu
          </h3>
          <p className="text-lg mt-5 text-black opacity-80 md:ps-0 ps-10">
            Indulge in a variety of expertly crafted dishes made with premium
            ingredients. We’re here to delight your taste buds and make every
            meal a memorable experience.
          </p>
        </div>

        <MenuItems />
      </div>
    </Element>
  );
};

export default Menu;
