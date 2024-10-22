import React, { useState, useEffect } from 'react';

function Scrapper() {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('idle');

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
    </div>
  );
}

export default Scrapper;
