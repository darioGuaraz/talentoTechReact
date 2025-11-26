import React, { useState } from "react";

import Main from "./main/Main";

import Cart from "./cart/Cart";

// Componente principal que gestiona todo el estado del carrito
const CartManager = () => {
  // Estado que almacena los productos agregados al carrito (array de objetos)
  const [cartItems, setCartItems] = useState([]);

  // Estado que controla si el carrito está visible o no
  const [cartVisible, setCartVisible] = useState(false);

  // Función que se ejecuta al agregar un producto desde Main
  const addToCart = (producto) => {
    // Añade el producto al array actual sin mutarlo (spread operator)
    setCartItems((prev) => [
      ...prev,
      { ...producto, cartId: Date.now() + Math.random() },
    ]);

    // Hace visible el carrito cuando se agrega el primer producto
    setCartVisible(true);
  };

  // Elimina los ítems seleccionados, recibiendo un array de IDs marcados
  const removeSelected = (ids) => {
    // Filtra los productos dejando solo los que NO estén en la lista de IDs seleccionados
    setCartItems((prev) => prev.filter((item) => !ids.includes(item.cartId)));
  };

  // Vacía el carrito estableciendo un array vacío
  const clearCart = () => {
    setCartItems([]);
  };

  // Se ejecuta cuando el usuario hace clic en "Realizar compra"
  const handleBuy = () => {
    // Número de WhatsApp donde se enviará el pedido
    const phoneNumber = "5491167907664";

    // Calcula el total sumando todos los precios
    const total = cartItems.reduce((acc, item) => acc + item.precio, 0);

    // Genera una lista de productos formateada en bullets para WhatsApp
    const listaProductos = cartItems
      .map((item) => `• ${item.titulo} - $${item.precio}`)
      .join("%0A"); // %0A = salto de línea en URL

    // Mensaje completo que se enviará por WhatsApp
    const mensaje = `Hola, quiero realizar la siguiente compra:%0A%0A${listaProductos}%0A%0ATotal: $${total}`;

    // Abre WhatsApp Web o la app con el mensaje prellenado
    window.open(`https://wa.me/${phoneNumber}?text=${mensaje}`, "_blank");
  };

  return (
    <>
      <Main addToCart={addToCart} />

      <Cart
        items={cartItems}
        visible={cartVisible}
        removeSelected={removeSelected}
        clearCart={clearCart}
        handleBuy={handleBuy}
      />
    </>
  );
};

export default CartManager;
