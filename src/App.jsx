
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu from './components/Menu'
import Mobile from './components/Mobile'
import Contact from './components/Contact'
import Signin from './components/Signin'
import Register from './components/Register'
import Cart from './components/Cart'
import { useState } from 'react'
import Checkout from './components/Checkout'
import CartProvider from './context/cartContext'


function App() {
  
 
 

  return (
    <>
    <CartProvider>
      <Navbar/>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/mobile-app' element={<Mobile/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>

      <Menu />

      <Contact />
      </CartProvider>

      
      
    </>
  )
}

export default App
