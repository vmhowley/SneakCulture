import './App.css'
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom'
import Home from './routes/Home'
import Products from './routes/Product'
import Category from './routes/Category'
import Cart from './routes/Cart'
import NewProduct from './routes/NewProduct'
import WishList from './routes/WishList'
import { motion, AnimatePresence } from 'framer-motion' 
import Basket from './routes/Basket'
import Scrapper from './routes/Scrapper'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/newprod" element={<NewProduct/>}/>
          <Route path="/wishlist" element={ <WishList /> }/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/basket" element={<Basket/>}/>
          <Route path="/scrapping" element={<Scrapper />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
