// productCart.js - This should display ONE product
import React from 'react';
import '../styles/product.css';

const ProductCard = ({ product, onAddToCart }) => {
  // Check if product exists
  if (!product) {
    return null;
  }

  const { id, name, price, image, description } = product;

  const handleAddToCart = () => {
    console.log('Adding product:', product);
    onAddToCart(product);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <span className="product-emoji">{image}</span>
      </div>
      
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        
        <div className="product-footer">
          <span className="product-price">${price}</span>
          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            aria-label={`Add ${name} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;