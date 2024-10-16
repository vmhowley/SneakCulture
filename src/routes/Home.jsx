import React from 'react'
import NavBar from '../components/navbar'
import BrandsCarousel from '../components/BrandsCarousel'
import ProductContainer from '../components/ProductContainer'
import Navigation from  '../components/Navigation'

function Home() {
  return (
    <div className='grid pb-24 sm:justify-center'>
      <div className='pb-10'>
        <NavBar />
      </div>
      <div className='sm:w-screen sm:px-10 gap-6 grid inset-x-0 '>
        <h1 className='text-left sm:text-center sm:pb-4 condensed font-bold '>BRANDS</h1>
        <BrandsCarousel/>
        <div className='content-center flex justify-between sm:pt-4'>
        <h1 className='text-left condensed font-bold   sm:pb-4'>NEW ARRIVAL</h1>
        <p className='light text-red-600 font-semibold text-sm'>View All</p>
        </div>
        <ProductContainer/>
      </div>
      <Navigation/>

    </div>
  )
}

export default Home
