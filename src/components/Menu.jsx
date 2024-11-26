import React from 'react'
import Topmenu from './menu/Topmenu'

const Menu = () => {
  return (
    <div className='container mx-auto'>
      <div>
        <h3 className='text-4xl font-semibold my-7 font-poppins md:ps-0 ps-10'>Discover Our Menu</h3>
        <p className='text-lg mt-5 text-black opacity-80 md:ps-0 ps-10'>Indulge in a variety of expertly crafted dishes made with premium ingredients. We’re here to delight your  taste buds and make every meal a memorable experience.

        </p>
      </div>
      <Topmenu />
      
    </div>
  )
}

export default Menu
