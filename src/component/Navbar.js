// src/component/Navbar.js
import React from 'react';  
import { Link } from 'react-router-dom';  
import '../styles/Navbar.css';  // Import the CSS file

const Navbar = () => {
    return (
        <nav className="navbar">  
            <div className="nav-container">  
                
               
                <Link to='/' className="nav-logo">
                    My Store
                </Link>
                
             
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to='/' className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/products' className="nav-link">
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/cart' className="nav-link">
                            Cart
                        </Link>
                    </li>
                    
                    <li className="nav-item mobile-only">
                        <Link to='/login' className="nav-link mobile-auth-link">
                            Login
                        </Link>
                    </li>
                    <li className="nav-item mobile-only">
                        <Link to='/signup' className="nav-link mobile-auth-link signup">
                            Sign Up
                        </Link>
                    </li>
                </ul>
                

                <div className="nav-auth">
                    <Link to='/login' className="auth-btn login-btn">
                        <span className="btn-icon">🔑</span>
                        Login
                    </Link>
                    <Link to='/signup' className="auth-btn signup-btn">
                        <span className="btn-icon">📝</span>
                        Sign Up
                    </Link>
                </div>
                
            </div>
        </nav>
    );
};

export default Navbar;