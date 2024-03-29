import React, { useState } from "react";
import "../css/Form.css";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { Button } from "../reusablecomponents/Button/Index";

const Login = (data) => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useLogin();
  const [errorMessage, setErrorMessage] = useState("");
  const nav = useNavigate();
  /**
   * Handle the form submission and log the user in.
   * @param {Event} e - The form submission event.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email && !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }
    try {
      const response = await login(email, password);
      console.log(response);
      if (response.status === 200) {
        console.log("Before navigation");
        nav("/dashboard/home");
        console.log("After navigation");
        setError(false);
      } else {
        setError(true);
        setErrorMessage(response.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box>
      <div>
        <main className="form-page">
          <div className="img-section" id="login" />
          <div className="form-section">
            <div className="form-header">
              <h1>Login</h1>
              <h4>
                Don't have an account?{" "}
                <Link to={"/signup"} underline="hover">
                  <p>Register</p>
                </Link>
              </h4>
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
              <Link className="forgotpassword" to={"/forgotpassword"}>
                <p>Forgot Password?</p>
              </Link>
              <Button 
               title={'LOG IN'}
               handleSubmit={handleSubmit}
               loading={isLoading}
               error={error}
              />
            </form>
            <div className="form-footer"></div>
          </div>
        </main>
      </div>
    </Box>
  );
};

export default Login;
