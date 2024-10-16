import React from 'react'
import BasketIcon from '../assets/icons/Basket.svg';
import Basket from './Basket';

function NavBar() {
  return (
    <div className='flex gap-4 z-50  flex-row  inset-x-0 p-3  fixed bg-white top-0'>
          <form
              onSubmit={(e) => e.preventDefault()} 
              className="w-full">
              <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                      type="text"
                      placeholder="Search by brand, type, style..."
                      className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-xl outline-none bg-gray-50 focus:bg-white focus:border-indigo-600 font-extralight"
                  />
              </div>
          </form>
          <Basket/>
            </div>
      )
  }


export default NavBar
