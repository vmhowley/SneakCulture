import React from 'react'
import Img1 from '../assets/products/img1.svg'
import Img2 from '../assets/products/img2.svg'
import Img3 from '../assets/products/img3.svg'
import Img4 from '../assets/products/img4.svg'
import TopBar from '../components/TopBar'
import Navigation from '../components/Navigation'
function Category() {
  const categories = [
    {
      name: 'Air Jordan',
      image: Img1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in orci eget velit elementum sagittis. Aliquam erat volutpat. Sed vel nunc sed lectus placerat pulvinar.'
    },
    {
      name: 'Basketball Shoes',
      image: Img2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in orci eget velit elementum sagittis. Aliquam erat volutpat. Sed vel nunc sed lectus placerat pulvinar.'
    },
    {
      name: 'Running Shoes',
      image: Img3,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in orci eget velit elementum sagittis. Aliquam erat volutpat. Sed vel nunc sed lectus placerat pulvinar.'
    },
    {
      name: 'Casual Shoes',
      image: Img4,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in orci eget velit elementum sagittis. Aliquam erat volutpat. Sed vel nunc sed lectus placerat pulvinar.'
    },
   
  ] 
  return (
    <>
    <div className='grid gap-6 pb-32 overflow-auto  px-8 fixed inset-x-0 h-full  '>
      <TopBar name={'CATEGORY'} />
      {categories.map((category) => {
        return(
          <div className='w-full relative top-10 p-4 h-36 rounded-3xl text-left content-center  items-center flex bg-black/10 justify-between font-bold neue text-xl' key={category.name}>
        <h1 className='w-3'>{category.name} </h1>        
        <img className='w-52 relative -right-10 -rotate-12' src={category.image} alt={category.name} />
      </div>
    )})}
    </div>
    <Navigation/>
    </>
  )
}

export default Category
