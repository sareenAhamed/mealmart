import React from 'react'
import logo from '../assets/MealMart.png';
import cartIcon from '../assets/cart-icon.png';
import searchIcon from '../assets/serch-icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container mx-auto flex justify-between items-center'>
      {/* #fa5409 */}
      <div className='w-48 h-20'>
        <img src={logo} alt="MealMart" />
      </div>

      <div className=''>
        <ul className='flex items-center text-sky-900 gap-7'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/menu'>Menu</Link></li>
          <li><Link to='/mobile-app'>Mobile-App</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>

      <div className='flex justify-between gap-7'>
        <img className='w-9 h-8 cursor-pointer' src={searchIcon} alt="Cart" />
        <img className='w-9 h-8 cursor-pointer' src={cartIcon} alt="Search" />
        <button className='border-2 border-daraz px-4 rounded-2xl text-sky-900'>Sign in</button>
      </div>
      
    </div>
  )
}

export default Navbar

