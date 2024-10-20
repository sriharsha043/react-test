// src/Cart.js
import React from 'react';
import { useCart } from '../../CartContext/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="product-grid">
          {cartItems.map((item) => (
            <div className="product-box" key={item.id}>
              <img src={item.image} alt={item.name} className="product-image" />
              <h2>{item.name}</h2>
              <p>{item.tagline}</p>
              <p>Price: ${item.price} <span className="discounted-price">${item.discountedPrice}</span></p>
              <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
