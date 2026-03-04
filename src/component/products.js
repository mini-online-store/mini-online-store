// Products.js - This displays the grid of products
import React from 'react';
import ProductCard from './productCart'; // Import the card component
import '../styles/products.css';

const Products = ({ products, onAddToCart }) => {
  // Add debug log
  console.log('Products array received:', products);

  // Check if products exists and has items
  if (!products) {
    return <div>Loading products...</div>;
  }

  if (products.length === 0) {
    return (
      <div className="product-grid-container">
        <h2 className="product-grid-title">Our Products</h2>
        <div className="no-products-message">No products available</div>
      </div>
    );
  }

  return (
    <div className="product-grid-container">
      <h2 className="product-grid-title">Our Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;