import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login  from "./components/Login";
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import Order from "./components/Order";
import Cart from './components/Cart'
import Product from './components/Product';
import Checkout from './components/Checkout';
import Billing from "./components/Billing";

function App() {
  
  return (
    <div className="App">
      <React.StrictMode>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/dashboard" exact element={<Dashboard />}>
              <Route path="product/:id" exact element={<Product />} />
              <Route path="order" exact element={<Order />} />
              <Route path="checkout" exact element={<Checkout />} />
              <Route path="billing" exact element={<Billing />} />
              <Route path="profile" exact element={<Profile />} />
              <Route path="cart" exact element={<Cart />} />
            </Route>
          </Routes>
        </Router>
      </React.StrictMode>
    </div>
  );
}

export default App;
