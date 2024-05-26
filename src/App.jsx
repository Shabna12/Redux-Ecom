import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import View from './pages/View'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/:id/view' element={<View/>}/>
        {/* page not found */}
        <Route path='/*' element={<Navigate to={'/'} />}  />
      </Routes>

      <Footer/>
    </>
  )
}

export default App
