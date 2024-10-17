import React, { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
function NewProduct() {
    const [product, setProduct] = useState()
    const handleInput = (e) =>{        
         setProduct({...product, [e.target.id]: e.target.value})  
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(product)
        //Send product to server
        await axios
        .post('https://warm-lokum-f5b661.netlify.app/.netlify/functions/app/producto', product)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))


    }
  return (
    <motion.div>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">New Product</h2>

    <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label  className="text-gray-700 dark:text-gray-200" htmlFor="name">Nombre de producto</label>
                <input onChange={handleInput}  id="name" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="brand">Marca</label>
                <input onChange={handleInput}  id="brand" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="image">imagen</label>
                <input onChange={handleInput}  id="image" type="file" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark
                 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

           <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="size">Talla</label>
            {/* Seleccionar talla */}
            <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" id="size">
              <option value="">Seleccione una talla</option>
              <option value="5">W 5 / M 3.5</option>
              <option value="5.5">W 5.5 / M 4</option>
              <option value="6">W 6 / M 4.5</option>
              <option value="6.5">W 6.5 / M 5</option>
              <option value="7">W 7 / M 5.5</option>
              <option value="7.5">W 7.5 / M 6</option>
              <option value="8">W 8 / M 6.5</option>
              <option value="8.5">W 8.5 / M 7</option>
              <option value="9">W 9 / M 7.5</option>
              <option value="9.5">W 9.5 / M 8</option>
              <option value="10">W 10 / M 8.5</option>
              <option value="10.5">W 10.5 / M 9</option>
              <option value="11">W 11 / M 9.5</option>
              <option value="11.5">W 11 / M 10</option>
              <option value="12">W 12 / M 10.5</option>
              <option value="12.5">W 12.5 / M 11</option>
              <option value="13">W 13 / M 11.5</option>
              <option value="13.5">W 13.5 / M 12</option>
              <option value="14">W 14 / M 12.5</option>
              <option value="14.5">W 14.5 / M 13</option>
              <option value="15">W 15 / M 13.5</option>
            </select>
            </div>
            
            <div className='flex items-center gap-2 '>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="price">Precio</label>
                <input onChange={handleInput}  id="price" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
           </div>
            <div className='flex items-center gap-2 '>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="quatity">Cantidad</label>
                <input onChange={handleInput}  id="quantity" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
           </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="category">Categoria</label>
                {/* Seleccionar categoria */}   
                <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-3  dark:focus:border-blue-300 focus:outline-none focus:ring" id="category">
                  <option value="">Seleccione una categoria</option>
                  <option value="1">Running Shoes</option>
                  <option value="2">Casual Shoes</option>
                  <option value="3">Sports Shoes</option>
                  <option value="4">Sneakers</option>
                  <option value="8">Otros</option>
                  </select>
           </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="condition">Condicion</label>
                <input onChange={handleInput}  id="condition" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
           </div>

            </div>

        <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </form>
</section>
      {JSON.stringify(product)}
    </motion.div>
    )
}

export default NewProduct
