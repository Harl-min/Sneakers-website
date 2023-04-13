import React from "react";
import { Link } from "react-router-dom";
import jordan from "../images/jordan.png";

const SignUp = () => {
  return (
    <div>
      <main className="form-page">
        <div className="img-section" id="signup"></div>
        <div className="form-section">
          {/* <img src={jordan} alt="jordan" className="logo" /> */}
          <h3 className="form-header">Welcome to QLUXURY!</h3>
          <form id="signup__form">
            <input placeholder="Your First Name" />
            <input placeholder="Your Email address" />
            <input placeholder="Your Password" type="password" />
            <button className="submit-button">SIGN UP</button>
          </form>
          <div className="form-footer signup__footer">
            <p>
              Already have an account?
              <Link to={"/login"}>
                <span>LOGIN</span>
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
