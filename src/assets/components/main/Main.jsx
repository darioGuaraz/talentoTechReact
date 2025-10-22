import React, { useState, useEffect } from "react";
import "./main.css";
import menuData from "../../data/menu.json"; // tu JSON
import Swal from "sweetalert2";

function Main() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setProductos(menuData);
  }, []);

  const handleComprar = (producto) => {
    Swal.fire({
      title: "¡Producto agregado!",
      text: `${producto.titulo} ($${producto.precio}) fue añadido al carrito.`,
      icon: "success",
      confirmButtonText: "OK",
      timer: 2000,
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
            <button onClick={() => handleComprar(producto)}>Comprar</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Main;
