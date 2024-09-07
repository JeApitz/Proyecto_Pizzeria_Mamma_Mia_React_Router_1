import React, { useState } from "react";
import { pizzaCart as initialCart } from "../pizzas";

import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState(
    initialCart.map((pizza) => ({
      ...pizza,
      quantity: 1,
    }))
  );

  const handleIncrease = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id ? { ...pizza, quantity: pizza.quantity + 1 } : pizza
      )
    );
  };

  const handleDecrease = (id) => {
    setCart(
      cart
        .map((pizza) =>
          pizza.id === id
            ? {
                ...pizza,
                quantity: pizza.quantity > 1 ? pizza.quantity - 1 : 0,
              }
            : pizza
        )
        .filter((pizza) => pizza.quantity > 0)
    );
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, pizza) => total + pizza.price * pizza.quantity,
      0
    );
  };

  const handlePay = () => {
    alert(" ..:: Botón de pago en construcción ::..");
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cart.map((pizza) => (
          <div key={pizza.id} className="cart-item">
            <img src={pizza.img} alt={pizza.name} className="pizza-image" />
            <div className="pizza-details">
              <h2>{pizza.name}</h2>
              <p>Precio: ${pizza.price}</p>
              <p>Cantidad: {pizza.quantity}</p>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  style={{
                    backgroundColor: "black",
                    borderRadius: "50px",
                    color: "whitesmoke",
                  }}
                  onClick={() => handleIncrease(pizza.id)}
                >
                  Aumentar
                </button>
                <button
                  style={{
                    backgroundColor: "red",
                    borderRadius: "50px",
                    color: "whitesmoke",
                  }}
                  onClick={() => handleDecrease(pizza.id)}
                >
                  Disminuir
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h2>Total: ${calculateTotal()}</h2>
      </div>
      <button className="pay-button" onClick={handlePay}>
        Pagar
      </button>
    </div>
  );
};

export default Cart;
