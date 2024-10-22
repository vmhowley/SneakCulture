import {useState} from 'react'
import BasketIcon from  '../assets/icons/Basket.svg'

function Basket() {

    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(2);

    const addToCart = (product) => {
        setCart([...cart, product]);
    }
  return (
    <>
    <div className='relative right-2'>
            <div className='bg-red-600 w-4 absolute text-xs font-sans  rounded-full -right-2 -top-2 text-white '>{count}</div>
            <img  src={BasketIcon} alt="" />
            </div>
    </>
  )
}

export default Basket
