import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Products from './component/products.js';
import productsData from './data/product.js';
import Login from './component/login.js';
import Signup from './component/signup.js';
import Navbar from './component/Navbar.js';
import Cart from './component/cart.js';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    console.log('Added to cart:', product);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>

        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route 
          path="/products" 
          element={
            <Products
              products={productsData} 
              onAddToCart={handleAddToCart} 
            />
          } 
        />
        <Route 
          path="/cart" 
          element={<Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;