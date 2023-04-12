import React from 'react'
import "../css/Form.css"
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";

 const Login = () => {
  const navigate = useNavigate();
    const handleSubmit = (event) => {
      console.log(event.value)
      event.preventDefault();
      navigate("/dashboard");
    };
  return (
    <div>
      <main className="form-page">
        <div className="img-section" id="login" />
        <div className="form-section">
          <img src={logo} alt="lilies" className='logo'/>
          <h3 className="form-header">Welcome Back!</h3>
          <form onSubmit={handleSubmit} id="login__form">
            <input placeholder="Your Email address" type="email" />
            <input placeholder="Your Password" type="password" />
            <button className="submit-button" type="button">
              Login
            </button>
          </form>
          <div className="form-footer">
            <Link to={"/signup"}>
              <p>Create an account</p>
            </Link>
            <p>Forgot Passoword</p>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Login;