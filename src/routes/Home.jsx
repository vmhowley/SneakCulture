import React from 'react'
import NavBar from '../components/NavBar'
import BrandsCarousel from '../components/BrandsCarousel'
import ProductContainer from '../components/ProductContainer'
import Navigation from  '../components/Navigation'
import { motion } from 'framer-motion'
function Home() {
  return (
    <motion.div className='grid pb-24 sm:justify-center'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}>
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

    </motion.div>
  )
}

export default Home
