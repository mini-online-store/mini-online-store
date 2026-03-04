import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css"

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm: ""
  });
  
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  
  const navigate = useNavigate();

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    
    if (name === "password") {
      checkPasswordStrength(value);
    }
  };

  // Password strength checker
  const checkPasswordStrength = (pass) => {
    if (pass.length < 6) setPasswordStrength("Weak");
    else if (pass.length < 10) setPasswordStrength("Medium");
    else setPasswordStrength("Strong");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    
    const { firstname, lastname, email, password, confirm } = formData;
    
    // Validation
    if (!firstname || !lastname || !email || !password || !confirm) {
      return setError("All fields are required");
    }
    
    if (password !== confirm) {
      return setError("Passwords do not match");
    }
    
    if (password.length < 6) {
      return setError("Password must be at least 6 characters");
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      
      // Save user data to localStorage
      const userData = { firstname, lastname, email };
      localStorage.setItem("user", JSON.stringify(userData));
      
      // Redirect to login
      navigate("/login", { 
        state: { message: "Account created successfully! Please login." }
      });
      
    }, 1500);
  };

  const getStrengthClass = () => {
    switch(passwordStrength) {
      case "Weak": return "strength-weak";
      case "Medium": return "strength-medium";
      case "Strong": return "strength-strong";
      default: return "";
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h2>Create Account</h2>
          <p>Join us today! It takes only a minute</p>
        </div>
        
        {/* Error Message */}
        {error && <div className="error-message">{error}</div>}
        
        {/* Signup Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="Enter your first name"
              required
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Enter your last name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />
            {formData.password && (
              <div className={`password-strength ${getStrengthClass()}`}>
                Password Strength: {passwordStrength}
              </div>
            )}
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirm"
              value={formData.confirm}
              onChange={handleChange}
              placeholder="Re-enter your password"
              required
            />
          </div>

          <button 
            type="submit" 
            className="submit-btn" 
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                Creating Account...
              </>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <div className="login-link">
          Already have an account?
          <a href="/login">Login here</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;