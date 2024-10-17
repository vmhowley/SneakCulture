import React, { useState } from 'react'

function NewProduct() {
    const [product, setProduct] = useState()
    const handleInput = (e) =>{        
         setProduct({...product, [e.target.name]: e.target.value})  
    }
  return (
    <div>
      <form action="" className='grid text-left'>
        <label htmlFor="productName">Product Name:</label>
        <input onChange={handleInput} type="text" id="productName" name="productName" required />
        <label htmlFor="productPrice">Product Price:</label>
        <input onChange={handleInput} type="number" id="productPrice" name="productPrice" required />
        <label htmlFor="productBrand">Product Brand:</label>
        <select id="productBrand" name="productBrand" required>
            <option value="">Select Brand</option>
            <option value="nike">Nike</option>
            <option value="adidas">Adidas</option>
            <option value="puma">Puma</option>
            <option value="hugo">Hugo Boss</option>
            <option value="converse">Converse</option>
            <option value="newbalance">New Balance</option>
            <option value="rebook">Rebook</option>
            <option value="asics">Asics</option>
        </select>
        <label htmlFor="productDescription">Product Category:</label>
        <select id="productCategory" name="productCategory" required>
            <option value="">Select Category</option>
            <option value="clothing">Clothing</option>
            <option value="shoes">Running Shoes</option>
            <option value="accessories">Casual Shoes</option>
        </select>
        <label htmlFor="productImage">Product Image:</label>
        <input type="file" id="productImage" name="productImage" required />
        <input type="submit" value="Add Product" />
        <input type="reset" value="Clear" />
      </form>
      {JSON.stringify(product)}
    </div>
  )
}

export default NewProduct
