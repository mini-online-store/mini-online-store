// Product.js
import React from 'react';
import '../styles/product.css';

const Product = ({ products, onAddToCart }) => {
  
  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }
  return (
    <div className="product-grid-container">
      <h2 className="product-grid-title">Our Products</h2>
      <div className="product-grid">
        {products.map(product => {
          const { id, name, price, image, description } = product;
          
          const handleAddToCart = () => {
            console.log(product);
            onAddToCart(product);
          };

          return (
            <div key={id} className="product-card">
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
        })}
      </div>
    </div>
  );
};

export default Product;