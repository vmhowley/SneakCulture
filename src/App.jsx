import './App.css'
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom'
import Home from './routes/Home'
import Products from './routes/Product'
import Category from './routes/Category'
import Cart from './routes/Cart'
import NewProduct from './routes/NewProduct'


function App() {
  return (
    <>
      <Router >
        <Routes >
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/newprod" element={<NewProduct/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
