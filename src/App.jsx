
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Menu from './components/Menu'
import Mobile from './components/Mobile'
import Contact from './components/Contact'


function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/mobile-app' element={<Mobile/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>

      <Menu />
    </>
  )
}

export default App
