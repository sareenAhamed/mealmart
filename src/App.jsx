import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Mobile from './components/Mobile';
import Contact from './components/Contact';
import Signin from './components/Signin';
import Register from './components/Register';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Parent from './components/Parent';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Parent />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Contact />
    </>
  );
}

export default App;
