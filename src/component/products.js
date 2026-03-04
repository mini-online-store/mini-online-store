
import React from 'react';
import Product from './component/Product.js';

import '../styles/products.css';

const Products = ({ products, onAddToCart }) => {
  return (
    <div className="product-grid-container">
      <h2 className="product-grid-title">Our Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <Product
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