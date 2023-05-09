/**
 * This component represents the Login form.
 * It allows the user to input their email and password
 * and submit the form to log in to their account.
 */

import React, { useState } from 'react';
import "../css/Form.css";
import { Link } from "react-router-dom";
import { useLogin } from '../hooks/useLogin';
import { useNavigate } from "react-router-dom";

import {
  Alert,
  Box,
  Button,
  FormHelperText,
  Link,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@mui/material';
/**
 * @param {Object} data - An object containing user data.
 * @return {JSX.Element} A form for the user to log in.
 */

const Login = (data) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, isLoading, error } = useLogin();
  const nav = useNavigate();
  /**
   * Handle the form submission and log the user in.
   * @param {Event} e - The form submission event.
   */
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      nav('/dashboard');
    } catch (err) {
      console.log(error);
    }
  }

  return (
    <div>
      <main className="form-page">
        <div className="img-section" id="login" />
        <div className="form-section">
          <h3 className="form-header">Welcome Back!</h3>
          <form onSubmit={handleSubmit} id="login__form">
            <input
              placeholder="Your Email address"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              placeholder="Your Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button disabled={isLoading}  className="submit-loginbutton" type="submit">
              Login
            </button>
            {error && <div className="error">{error}</div>}
          </form>
          <div className="form-footer">
            <Link to={"/signup"}>
              <p>Create an account</p>
            </Link>
            <p>Forgot Password</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;