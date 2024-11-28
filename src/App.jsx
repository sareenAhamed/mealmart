
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu from './components/Menu'
import Mobile from './components/Mobile'
import Contact from './components/Contact'
import Signin from './components/Signin'
import Register from './components/Register'
import { useState } from 'react'


function App() {
  
  const [isModalOpen, setIsModalOpen] = useState(false);  // Modal visibility
  const [showRegister, setShowRegister] = useState(false); // To toggle between SignIn and Register

  // Function to open the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setShowRegister(false); // Reset to SignIn when closing
  };

  return (
    <>
      <Navbar handleOpenModal={handleOpenModal} />
      {/* SignIn - Modal */}
      {isModalOpen && (
        <Signin
          onClose={handleCloseModal}
          showRegister={showRegister}
          setShowRegister={setShowRegister}
        />
      )}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/mobile-app' element={<Mobile/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>


      <Menu />
    </>
  )
}

export default App
