import React, {useState} from 'react'
import "../css/Form.css"
import { Link} from "react-router-dom";


 const Login = (data) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <div>
      <main className="form-page">
        <div className="img-section" id="login" />
        <div className="form-section">
          {/* <img src={jordan} alt="lilies" className='logo'/> */}
          <h3 className="form-header">Welcome Back!</h3>
          <form onSubmit={handleSubmit}  id="login__form">
          <input placeholder="Your Email address" type="email" onChange={(e) => setEmail(e.target.value)}
            value={email}/>
          <input placeholder="Your Password" type="password"  onChange={(e) => setPassword(e.target.value)}
            value={password}/>
             <button className="submit-loginbutton" type="submit">
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