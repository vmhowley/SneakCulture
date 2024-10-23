import React, { useState, useEffect } from 'react';

function Scrapper() {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('idle');
  const [products, setProducts] = useState([
    {
    id: 1,
    tittle: 'Nike Air Zoom Pegasus 37',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 150.0,
    image: 'https://example.com/image1.jpg',
  },
  {
    id: 2,
    tittle: 'Adidas Ultraboost 17',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 180.0,
    image: 'https://example.com/image2.jpg',
  },
  {
    id: 3,
    tittle: 'Reebok Classic 12',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 120.0,
    image: 'https://example.com/image3.jpg',
  }
])
  useEffect(()=> {
    async function getNews ()  {
      const response = await fetch('http://localhost:4000/products/nike');
      const data = await response.json();
      setProducts(data);
      console.log(data)
    }
    
    getNews()
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
        <div>
          <h2>Productos Encontrados:</h2>
          <ul>
            {products.map((product) => (
              <li key={product.tittle || ''}>{product.tittle || ''}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Scrapper;
