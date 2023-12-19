/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import "../css/Form.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
          // Login successful, navigate to the dashboard page
          nav('/dashboard/home');
          // Handle login error without navigation
    };
    return (
    <div>
      <div className="form-section">
          <div className="form-header">
          <h1>Forgot Password?</h1>
          <h4>Back to <Link to={"/login"} underline="hover">
              <p>Login</p>
            </Link></h4>
            </div>
          <form onSubmit={handleSubmit} id="login__form">
            <input
              placeholder="Your Email address"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <button className="submit-loginbutton" type="submit">
              Reset Password
            </button>
          </form>
          <div className="form-footer">
            
            
            
          </div>
        </div>
    </div>
  )
}

export default ForgotPassword;
