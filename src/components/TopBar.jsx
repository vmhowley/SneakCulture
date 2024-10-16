import React from 'react'
import BackIcon from '../assets/icons/Back.svg'
import { Link, useNavigate } from 'react-router-dom'
import BasketIcon from  '../assets/icons/Basket.svg'
import Basket from './Basket'

function TopBar({name, buttons}) {
    const navigate = useNavigate()
  const handleBack = () => {
    navigate('/') // go back one page in the history stack
  }
    return (
    <div className='fixed flex  top-0 left-0 items-center z-50 p-4 w-screen justify-between'>
      <Link to={-1} className=' w-10 h-10'><img src={BackIcon} alt="" /></Link>
    <h1 className='condensed font-bold text-3xl '>{name}</h1>
    <h1 className='condensed font-bold text-3xl '>{buttons === 'cart' ? <Basket/> :''}</h1>
        
        </div>
  )
}

export default TopBar
