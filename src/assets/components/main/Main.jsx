import React, { useState, useEffect } from "react";
import "./main.css";
import menuData from "../../data/menu.json";
import Swal from "sweetalert2";

function Main({ addToCart }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setProductos(menuData); // acá viene tu JSON
  }, []);

  const handleComprar = (producto) => {
    addToCart(producto);

    Swal.fire({
      title: "¡Producto agregado!",
      text: `${producto.titulo} ($${producto.precio}) fue añadido al carrito.`,
      fontFamily: "poppins, sans-serif",
      icon: "success",
      iconColor: "#570229",
      confirmButtonText: "OK",
      background: "#fffef7ff",

      confirmButtonColor: "#570229",
      timer: 1500,
    });
  };

  return (
    <main>
      <h1>Listado de productos</h1>

      <div className="containerCards-main">
        {productos.map((producto) => (
          <div key={producto.id} className="card">
            <img src={producto.imagen} alt={producto.titulo} />
            <h2>{producto.titulo}</h2>
            <p>{producto.descripcion}</p>
            <span className="precio">${producto.precio}</span>

            <button
              onClick={() => handleComprar(producto)}
              className="btnSelect"
            >
              Comprar
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Main;
