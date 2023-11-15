/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import "../css/Form.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function ChangePassword() {
    
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
          <h1>Login</h1>
          <h4>Don't have an account? <Link to={"/signup"} underline="hover">
              <p>Register</p>
            </Link></h4>
            </div>
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
            <Link to={"/changepassword"}>
            <p>Forgot Password</p>
            </Link>
            {/* <FormControl className='password'>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl> */}

            <button className="submit-loginbutton" type="submit">
              Login
            </button>
          </form>
          <div className="form-footer">
            
            
            
          </div>
        </div>
    </div>
  )
}
