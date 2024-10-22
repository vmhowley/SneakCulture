import React from 'react'
import Img1 from '../assets/products/img1.svg'
import Img2 from '../assets/products/img2.svg'
import Img3 from '../assets/products/img3.svg'
import Img4 from '../assets/products/img4.svg'
import TopBar from '../components/TopBar'
import Navigation from '../components/Navigation'
import { motion } from 'framer-motion'
function Category() {
  const categories = [
    {
      name: 'Cloth',
      image: Img1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in orci eget velit elementum sagittis. Aliquam erat volutpat. Sed vel nunc sed lectus placerat pulvinar.'
    },
    {
      name: 'Running Shoes',
      image: Img2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in orci eget velit elementum sagittis. Aliquam erat volutpat. Sed vel nunc sed lectus placerat pulvinar.'
    },
    {
      name: 'Casual Shoes',
      image: Img3,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in orci eget velit elementum sagittis. Aliquam erat volutpat. Sed vel nunc sed lectus placerat pulvinar.'
    },
    {
      name: 'Bags',
      image: Img4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in orci eget velit elementum sagittis. Aliquam erat volutpat. Sed vel nunc sed lectus placerat pulvinar.'
    },
    {
      name: 'Hats',
      image: Img4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in orci eget velit elementum sagittis. Aliquam erat volutpat. Sed vel nunc sed lectus placerat pulvinar.'
    },
   
  ] 
  return (
    <>
    <motion.div className='grid gap-6 pb-56 overflow-auto  px-8 fixed inset-x-0 h-screen  '
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    exit={{ opacity: 0 }}>
      <TopBar name={'CATEGORY'} />
      {categories.map((category) => {
        return(
          <div className='w-full relative top-10 p-4 h-36 rounded-3xl text-left content-center  items-center flex bg-black/10 justify-between font-bold neue text-xl' key={category.name}>
        <h1 className='w-3'>{category.name} </h1>        
        <img className='w-52 relative -right-10 -rotate-12' src={category.image} alt={category.name} />
      </div>
    )})}
    </motion.div>
    <Navigation/>
    </>
  )
}

export default Category
