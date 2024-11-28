import React, { createContext, useEffect, useState } from 'react'
import MenuItems from './menu/MenuItems'
import Mobile from './Mobile'


const Menu = () => {

  
  return (
   
    <div className='container mx-auto -z-40'>
      <div>
        <h3 className='text-4xl font-semibold my-7 font-poppins md:ps-0 ps-10'>Discover Our Menu</h3>
        <p className='text-lg mt-5 text-black opacity-80 md:ps-0 ps-10'>Indulge in a variety of expertly crafted dishes made with premium ingredients. We’re here to delight your  taste buds and make every meal a memorable experience.

        </p>
      </div>

      <MenuItems />
      <Mobile />

      
    </div>
    
  )
}

export default Menu
