import React, { useState } from "react";
import lgocart from "../../../../public/img/carrito.png";
import "./cart.css";

const Cart = ({ items, visible, removeSelected, clearCart, handleBuy }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  if (!visible || items.length === 0) return null;

  const total = items.reduce((acc, item) => acc + item.precio, 0);

  const toggleSelect = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <div className="cart-container">
      <img src={lgocart} alt="Carrito" />

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={selectedItems.includes(item.cartId)}
              onChange={() => toggleSelect(item.cartId)}
            />
            {item.titulo} - ${item.precio}
          </li>
        ))}
      </ul>

      <p className="total">Total: ${total}</p>
      <div className="botoneraCart">
        <div className="botoneraDelete">
          {" "}
          <button
            className="btnCancelar"
            onClick={() => removeSelected(selectedItems)}
          >
            Eliminar seleccionados
          </button>
          <button className="btnVaciar" onClick={clearCart}>
            Vaciar carrito
          </button>
        </div>

        <button className="btnComprar" onClick={handleBuy}>
          Realizar compra
        </button>
      </div>
    </div>
  );
};

export default Cart;
