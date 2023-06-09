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

import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
// import FilledInput from '@mui/material/FilledInput';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';


const Login = (data) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, isLoading, error } = useLogin();
  const nav = useNavigate();
  /**
   * Handle the form submission and log the user in.
   * @param {Event} e - The form submission event.
   */
  // const [showPassword, setShowPassword] = React.useState(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      nav('/dashboard/home');
    } catch (err) {
      console.log(error);
    }
  }

  return (
    <Box>
    <div>
      <main className="form-page">
        <div className="img-section" id="login" />
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
            <Link to={"/signup"}>
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

            <button disabled={isLoading}  className="submit-loginbutton" type="submit">
              Login
            </button>
            {error && <div className="error">{error}</div>}
          </form>
          <div className="form-footer">
            
            
            
          </div>
        </div>
      </main>
    </div>
    </Box>
  );
};

export default Login;