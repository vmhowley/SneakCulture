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
    <div className='fixed top-0 left-0 w-full  flex items-center content-center z-50  p-3 bg-white  '>
      <Link to={-1}>
      <img src={BackIcon} alt="" />
      </Link>
    <h1 className='condensed font-bold text-4xl justify-center flex w-full'>{name}</h1>
    <button className=''>{buttons === 'cart' ? <Basket/> :''}</button>
        </div>
  )
}

export default TopBar
