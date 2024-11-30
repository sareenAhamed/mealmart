import React, { useContext, useState, } from 'react'
import logo from '../assets/MealMart.png';
import cartIcon from '../assets/cart-icon.png';
import cartWithDot from '../assets/cartWithDot.png';
import searchIcon from '../assets/serch-icon.png';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../context/cartContext';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // For cart indication
  const {cartFoods} = useContext(CartContext)

  return (
    <div className='px-10 mx-auto md:flex md:justify-between md:items-center sticky top-0 z-50 bg-white mt-3'>
      <div className='w-48 h-20'>
        <img src={logo} alt="MealMart" />
      </div>

      <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={open?"close-outline": "menu-outline"}></ion-icon>
            
      </div>

      <div className={`md:flex md:items-center md:pb-0 pb-12 md:static absolute bg-white md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-allduration-500 ease-in ${open? 'top-20': 'top-[-490px]'}  lg:gap-60`}>
        <ul className='md:flex md:items-center text-sky-900 md:gap-7 md:ms-0 ms-5  md:mb-0 mb-3'>
          <li className='md:py-0 py-2 md:hover:bg-white md:hover:ps-0 hover:bg-daraz hover:ps-2 rounded duration-500'><NavLink to='/' className={({ isActive }) => isActive ? 'border-b-2 border-daraz' : ''}>Home</NavLink></li>
          <li className='md:py-0 py-2 md:hover:bg-white md:hover:ps-0 hover:bg-daraz hover:ps-2 rounded duration-500'><NavLink to='/menu' className={({ isActive }) => isActive ? 'border-b-2 border-daraz' : ''}>Menu</NavLink></li>
          <li className='md:py-0 py-2 md:hover:bg-white md:hover:ps-0 hover:bg-daraz hover:ps-2 rounded duration-500'><NavLink to='/mobile-app' className={({ isActive }) => isActive ? 'border-b-2 border-daraz' : ''}>Mobile-App</NavLink></li>
          <li className='md:py-0 py-2 md:hover:bg-white md:hover:ps-0 hover:bg-daraz hover:ps-2 rounded duration-500'><NavLink to='/contact' className={({ isActive }) => isActive ? 'border-b-2 border-daraz' : ''}>Contact</NavLink></li>
        </ul>

        <div className='flex md:justify-between justify-around md:gap-7 gap-3 items-center'>
          <img className='w-9 h-8 cursor-pointer' src={searchIcon} alt="Search" />
          <Link to='/cart'>
          
          {cartFoods.length !== 0?<img className='w-9 h-8 cursor-pointer' src={cartWithDot} alt="Cart" /> : <img className='w-9 h-8 cursor-pointer' src={cartIcon} alt="Cart" />}
          </Link>

          <button className='border-2 border-daraz text-sky-900 px-4 py-1 rounded-xl hover:bg-red-500 hover:text-white transition'><Link to='/signin'>Sign in</Link></button>
        </div>

      </div>

    </div>
  )
}

export default Navbar

