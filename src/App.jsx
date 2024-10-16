import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Navbar from  './components/NavBar'
import Home from './Routes/Home'
import Products from './routes/Product'
import Category from './routes/Category'
import Cart from './routes/Cart'


function App() {
  return (
    <>
      <Router >
        <Routes location={location}>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
