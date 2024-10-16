import {useState} from 'react'
import BasketIcon from  '../assets/icons/Basket.svg'

function Basket() {

    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(2);

    const addToCart = (product) => {
        setCart([...cart, product]);
    }
  return (
    <button className='w-14 border  content-center rounded-xl'>
            <div className='bg-red-600 w-4 fixed text-xs font-sans  rounded-full right-4 top-5 scale-90 text-white '>{count}</div>
            <img className='fixed top-7 right-6' src={BasketIcon} alt="" />
            </button>
  )
}

export default Basket
