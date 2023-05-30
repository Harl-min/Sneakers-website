import React from 'react'
import "../css/Sidebar.css";
import logo from "../images/logo.svg";
import sneakerlogo from "../images/sneaker.png";
import NavItems from './NavItems';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="brand">
          <img src={sneakerlogo} alt="logo" />
          <p>QLUXURY</p>
        </div>
       <NavItems/>
      </div>
    </div>
  );
}


export default Sidebar