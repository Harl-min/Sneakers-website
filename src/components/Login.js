import React, {useState} from 'react'
import "../css/Form.css"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


 const Login = (data) => {
  const navigate = useNavigate();

    const handleSubmit = (event) => {
      console.log(event.value)
      event.preventDefault();


      // const login = {
      //   email: enteredEmail,
      //   password: enteredPassword
      // }

      // data.onLogin(login);
      // setEmail('');
      // setPassword('');
      navigate("/dashboard");
    };

    const [enteredEmail, setEmail] = useState('');
    const [enteredPassword, setPassword] = useState(''); 
    
    async function submit(e){
      e.preventDefault();

      try {

      }
      catch {
        
      }
    }

    const email = event => {
      setEmail(event.target.value);
    }

    const password = event => {
      setPassword(event.target.value);
    }
  return (
    <div>
      <main className="form-page">
        <div className="img-section" id="login" />
        <div className="form-section">
          {/* <img src={jordan} alt="lilies" className='logo'/> */}
          <h3 className="form-header">Welcome Back!</h3>
          <form onSubmit={handleSubmit} action="POST" id="login__form">
            <input placeholder="Your Email address" type="email" onChange={email}/>
            <input placeholder="Your Password" type="password" onChange={password}/>
            <button className="submit-loginbutton" type="submit" onClick={submit}>
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