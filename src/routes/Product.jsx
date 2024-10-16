import React from 'react'
import Img1 from '../assets/products/img1.svg'
import Img2 from '../assets/products/img2.svg'
import Img3 from '../assets/products/img3.svg'
import Jordan1 from '../assets/products/img1.svg'
import TopBar from '../components/TopBar'
function Products() {
  return (
    <>
    <div className='grid  justify-center relative w-screen -top-8 -left-8 inset-x-0 py-28' >
    <TopBar name={''} buttons={'cart'}/>

      <div className='flex overflow-hidden  items-center bg-slate-200/50 inset-x-0 h-80 fixed rounded-b-xl'>
      <img className='w-40 fixed z-40 blur-sm -left-24 -rotate-45' src={Img2} />
      <img className='w-full fixed z-50 object-none -rotate-12' src={Img1} alt="" />
      <img className='w-40 fixed z-40 blur-sm -right-16 -rotate-45 ' src={Img3} />
      </div>
      <div className='relative -bottom-32'>
      <ul className='flex gap-3 w-80 justify-center'>
        <li className='border rounded-2xl '>
          <img className='w-16 h-14 bg-white rounded-2xl' src={Img2} alt="" />
        </li>
        <li className='border-2 rounded-2xl'>
          <img className='w-16 h-14 bg-white rounded-2xl' src={Img1} alt="" />
        </li>
        <li className='border rounded-2xl '>
          <img className='w-16 h-14 bg-white rounded-2xl' src={Img3} alt="" />
        </li>
        
      </ul>
      </div>
    </div>
    <div className='mt-6 grid gap-2 fixed inset-x-3'>
      <div className='text-left flex justify-between items-center'>
      <h1 className='condensed font-bold text-2xl tracking-wide'>JORDAN 1 RETRO HIGH OG</h1>
       icono
      </div>
      <div className='text-left text-2xl items-center gap-2  flex  '>
        <h1 className='p-1 -rotate-3 w-20 flex neue font-bold justify-center bg-lime-400'><p className='rotate-3'>$278</p></h1>
        <p className='line-through text-zinc-400 neue font-light'>$385</p>
      </div>
      <div className=' gap-2 grid text-left mt-2 neue font-semibold'>
        <p>Select Size</p>
        <div className='gap-2 flex'>
          <button className='border-2 text-black neue  py-2 px-3 rounded-full'>UK 6</button>
          <button className='border-2 text-black neue  py-2 px-3 rounded-full'>UK 7</button>
          <button className='border-2 text-black neue  py-2 px-3 rounded-full'>UK 9</button>
          <button className='border-2 text-black neue  py-2 px-3 rounded-full'>UK 10</button>
        </div>
      </div>

    </div>
    </>
  )
}

export default Products
