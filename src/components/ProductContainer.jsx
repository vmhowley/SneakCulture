import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
function ProductContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect para hacer la solicitud cuando el componente se monta
  useEffect(() => {
    // Función para obtener los productos
    const obtenerProductos = async () => {
      try {
        const response = await axios.get(
          "https://warm-lokum-f5b661.netlify.app/.netlify/functions/app/productos"
        );
        setProducts(response.data); // Guardar productos en el estado
        setLoading(false); // Cambiar el estado de cargando
      } catch (err) {
        setError("Error al cargar productos");
        setLoading(false);
      }
    };

    obtenerProductos();
  }, []); // [] hace que la función se ejecute una sola vez al montar el componente

  // Mostrar un mensaje de carga o error si corresponde
  if (loading)
    return (
      <div className=" inset-x-0 fixed items-center content-center justify-center w-screen flex my-56">
        <Loader />
      </div>
    );
  if (error) return <p>{error}</p>;
  if (products.length <= 0) return <p>{"No hay productos Existentes"}</p>;

  return (
    <div className="grid grid-cols-2 gap-6 justify-center content-center items-center">
      {products.map((product) => (
        <Link to={`/products/${product._id}`} className="sm:flex sm:gap-3 sm:items-start" key={product._id}>
          <div className="w-36 h-36 items-center content-center  mb-2  ">
            <img
              className="object-center w-36 h-36 rounded-2xl"
              src={product.image}
              alt={product.image}
            />
          </div>
          <div className="text-left sm:grid sm:gap-2 sm:font-bold">
            <h1 className="neue  uppercase text-xs">{product.name}</h1>
            <div className="flex gap-2 neue">
              <h1 className="font-bold">
                ${parseFloat(product.price)}</h1>
              <h1 className="line-through text-gray-400 ">
                ${parseFloat(product.price) + 35}
              </h1>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductContainer;
