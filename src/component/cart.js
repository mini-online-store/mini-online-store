import React from 'react';
import '../styles/cart.css';

const Cart = ({ cart }) => {
  if (!cart || cart.length === 0) {
    return (
      <div className="cart-page">
        <h2 className="cart-empty-title">Your cart is empty</h2>
        <p className="cart-empty-text">Add some products from the products page.</p>
      </div>
    );
  }

  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    <div className="cart-page">
      <h2 className="cart-title">Your Cart</h2>
      <ul className="cart-list">
        {cart.map((item, index) => (
          <li
            key={index}
            className="cart-item"
          >
            <div className="cart-item-info">
              <div className="cart-item-name">{item.name}</div>
              {item.description && (
                <div className="cart-item-description">
                  {item.description}
                </div>
              )}
            </div>
            <div className="cart-item-price">${item.price}</div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        Total: ${total.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;

