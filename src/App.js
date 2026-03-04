import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Product from './component/Product.js';
// import products from './component/products.js'
import productsData from './data/product.js';
import Login from './component/login.js';
import Signup from './component/signup.js';

function App() {

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log('Added to cart:', product);
  }
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route 
          path="/product" 
          element={
            <Product 
              products={productsData} 
              onAddToCart={handleAddToCart} 
            />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;