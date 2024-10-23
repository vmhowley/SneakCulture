import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Scrapper() {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('idle');
  const [products, setProducts] = useState([])
  useEffect(()=> {
    const obtenerProductos = async () => {
      try {
        const response = await axios.get(
          'http://localhost:4000/products/nike'
        );
        console.log(response.data)
        setProducts(response.data.products); // Guardar productos en el estado
      } catch (err) {
        console.error(err)
      }
    };
    obtenerProductos();
  },[])
  const startScrapper = async () => {
    if (!url) {
      alert('Por favor, ingresa una URL');
      return;
    }
    const response = await fetch('http://localhost:4000/start-scrapper', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });
    const data = await response.json();
    setStatus(data.status);
  };

  const checkStatus = async () => {
    const response = await fetch('http://localhost:4000/status');
    const data = await response.json();
    setStatus(data.status);
  };

  useEffect(() => {
    const interval = setInterval(checkStatus, 5000); // Chequear estado cada 5 segundos
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="grid  gap-3 justify-center text-center">
      <h1 className='text-2xl font-bold'>Scrapper de Producto</h1>
      <input
      className='border ring-2 ring-black  relative '
        type="text"
        placeholder="URL del Producto"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <div className='space-y-2'>
      <button className='border bg-red-700/20 w-max p-2' onClick={startScrapper}>Iniciar Scrapper</button>
      <h2>Estado: {status}</h2>
      {status === 'available' && <p>¡Producto disponible!</p>}
      </div>
        {products.length > 0 && (
        <div className='grid grid-cols-2 gap-y-6 justify-center items-center content-center'>
          <h2 className='col-span-2'>Productos Encontrados:</h2>
            {products.map((item, index) => (
              <>
             {item != null ?
             <div className='grid justify-center text-left gap-2' key={index}>
             <img src={item.image} alt="as" className='border rounded-xl w-32' />
             <h1>{item.tittle}</h1>   
             </div>
             : ''}
             </>
          ))}
 </div>
        )}
    </div>
  );
}

export default Scrapper;
