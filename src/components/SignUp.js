import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, isLoading, error } = useSignup()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
    console.log(error)
  }

  return (
    <div>
      <main className="form-page">
        <div className="img-section" id="signup"></div>
        <div className="form-section">
        <div className="form-header">
          <h1>Welcome to QLUXURY!</h1>
          <h4>Already have an account?<Link to={"/login"}>
                <p>LOGIN</p>
              </Link></h4>
            </div>
          <form id="signup__form" onSubmit={handleSubmit}>
            <input placeholder="Your Email address" type="email" onChange={(e) => setEmail(e.target.value)}
            value={email}/>
            <input placeholder="Your Password" type="password"  onChange={(e) => setPassword(e.target.value)}
            value={password}/>
            <button className="submit-button" type="submit" disabled={isLoading}>SIGN UP</button>
            {error && <div className="error">{error}</div>}
          </form>
          </div>
      </main>
    </div>
  );
};

export default SignUp;
