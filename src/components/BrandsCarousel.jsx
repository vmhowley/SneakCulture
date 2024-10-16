import React from 'react'
import Adidas from '../assets/brands/Vector-1.svg'
import Nike from '../assets/brands/Vector.svg'
import Boss from '../assets/brands/Image5.svg'
import Puma from '../assets/brands/Vector-2.svg'
import Rebook from '../assets/brands/Vector-3.svg'
import Converse from '../assets/brands/image6.svg'
function BrandsCarousel() {
    const brands = [
        {
            id: 1,
            name: 'Nike',
            logo: Nike,
            
        },
        {
            id: 2,
            name: 'Adidas',
            logo: Adidas,
            
        },
        {
            id: 3,
            name: 'Hugo Boss',
            logo: Boss,
            
        },
        {
            id: 4,
            name: 'Puma',
            logo: Puma,
            
        },
        {
            id: 5,
            name: 'Rebook',
            logo: Rebook,
            
        },
        {
            id: 6,
            name: 'Converse',
            logo: Converse,
            
        },
        
    ]
  return (
    <div className=" max-w-80 sm:max-w-full inline-flex flex-nowrap overflow-auto no-scrollbar sm:justify-center">
        <ul className='flex gap-2'>
            {brands.map(brand => (
                <li key={brand.id} className='border bg-black/10 rounded-xl  w-14 h-14 sm:w-32 sm:h-32 justify-center flex p-2 content-center'>
                    <img src={brand.logo} alt="" />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default BrandsCarousel
