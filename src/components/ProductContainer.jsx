import axios from "axios";
import {useState, useEffect} from 'react'
import Img1 from '../assets/products/img1.svg'
import Img3 from '../assets/products/img3.svg'
import AdidasSamba from '../assets/products/Adidas-Samba.jpg'
import Img4 from '../assets/products/img2.svg'
import NewBalance from '../assets/products/New-Balance-9060-Black-Castlerock-Grey-Product.avif'
import { Link } from 'react-router-dom'
function ProductContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect para hacer la solicitud cuando el componente se monta
  useEffect(() => {
    // Función para obtener los productos
    const obtenerProductos = async () => {
      try {
        const response = await axios.get('https://warm-lokum-f5b661.netlify.app/.netlify/functions/app/productos');
        setProducts(response.data); // Guardar productos en el estado
        setLoading(false); // Cambiar el estado de cargando
      } catch (err) {
        setError('Error al cargar productos');
        setLoading(false);
      }
    };

    obtenerProductos();
  }, []); // [] hace que la función se ejecute una sola vez al montar el componente

  // Mostrar un mensaje de carga o error si corresponde
  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;



  return (
    <Link to={'/products'} className='grid grid-cols-2 sm:flex sm:flex-col  gap-6 justify-center content-center items-center '>
        {products.map(product => 
      <div className='' key={product._id}>
        <div className='w-36 h-36 items-center content-center bg-white shadow rounded-2xl mb-2'>
        <img className='object-contain w-36 h-36' src={Img1} alt="" />
        </div>
        <div className='text-left'>
        <h1 className='neue  uppercase text-xs'>{product.nombre}</h1>
        <div className='flex gap-2 neue' >
        <h1 className='font-bold'>${product.precio}</h1>
        <h1 className='line-through text-gray-400 '>${product.precio+20}</h1>
        </div>
        </div>
        </div>
        )}
        </Link>
  )
}

export default ProductContainer
