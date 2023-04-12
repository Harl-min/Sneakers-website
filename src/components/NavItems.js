import React from "react";
import { NavLink} from "react-router-dom";
import homeIcon from "../images/home.svg";
import dashIcon from "../images/grid.png";
import calenderIcon from "../images/order.svg";
import userIcon from "../images/profile.svg";
import cartIcon from "../images/cart.svg";
import logout from "../images/logout.svg";
import { useSelector } from "react-redux";
const NavItems = () => {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div className="nav-items">
      <ul>
        <NavLink
          className={({ isActive }) => (isActive ? "active " : "nav-item")}
          to="/dashboard"
          end
        >
          <span className="sidebar-icon">
            <img src={dashIcon} alt="home-Icon" />
          </span>
          <p className="navName">Dashboard</p>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active " : "nav-item")}
          to="/dashboard/profile"
        >
          <span className="sidebar-icon">
            <img src={userIcon} alt="user-icon" />
          </span>
          <p className="navName">Your Profile</p>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "nav-item")}
          to="/dashboard/order"
        >
          <span className="sidebar-icon">
            <img src={calenderIcon} alt="calender-icon"></img>
          </span>
          <p className="navName">Orders</p>
          <span className="orders-count-container">
            <p className="orders-count">0</p>
          </span>
        </NavLink>
        <NavLink
          to="/dashboard/cart"
          className={({ isActive }) => (isActive ? "active " : "nav-item")}
        >
          <span className="sidebar-icon">
            <img src={cartIcon} alt="badge" id="cartIcon" />
          </span>
          <p className="navName">Your Cart</p>
          <span className="cart-count-container">
            <p className=" cart-count">{cart.length}</p>
          </span>
        </NavLink>
        <li id="logout">
          <img src={logout} alt="logout" />
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
