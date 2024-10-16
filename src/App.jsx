import './App.css'
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom'
import Home from './Routes/Home'
import Products from './routes/Product'
import Category from './routes/Category'
import Cart from './routes/Cart'


function App() {
  return (
    <>
      <Router >
        <Routes >
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
