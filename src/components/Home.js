import React, { useState } from "react";
import appStoreBadge from "../images/AppStoreBadge.svg";
import googleplayBadge from "../images/GooglePlayBadge.svg";
import social1 from "../images/Social-Icons.svg";
import social2 from "../images/Social-Icons-1.svg";
import social3 from "../images/Social-Icons-2.svg";
import sneaker from "../images/sneakerlogo.png";
import shoe from "../images/Sneakerss.png";
import dunk from "../images/greensb.jpg";
import dunk2 from "../images/dunk4.jpg";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "../css/Home.css";
import { CiMenuFries } from "react-icons/ci";

const Home = () => {
  const special_meals = [
    {
      meal_name: "Nike Dunk Low",
      meal_description: "#70,000",
      meal_price: "#60,000",
      meal_image: shoe,
    },
    {
      meal_name: "Nike Dunk Low",
      meal_description: "#200,000",
      meal_price: "#190,000",
      meal_image: shoe,
    },
    {
      meal_name: "Nike Dunk Low",
      meal_description: "#120,000",
      meal_price: "#100,000",
      meal_image: shoe,
    },
    // {
    //   meal_name: "Nike Dunk Low",
    //   meal_description: "#80,000",
    //   meal_image: shoe ,
    // }
  ];

  const trending_products = [
    {
      meal_name: "Nike Dunk Low",
      meal_description: "#70,000",
      meal_image: shoe,
    },
    {
      meal_name: "Nike Dunk Low",
      meal_description: "#200,000",
      meal_image: shoe,
    },
    {
      meal_name: "Nike Dunk Low",
      meal_description: "#120,000",
      meal_image: shoe,
    },
    {
      meal_name: "Nike Dunk Low",
      meal_description: "#120,000",
      meal_image: shoe,
    },
  ];

  const explore_products = [
    {
      meal_name: "Nike Jordans",
      meal_description: "#70,000",
      meal_image: dunk,
    },
    {
      meal_name: "Nike Dunks",
      meal_description: "#200,000",
      meal_image: dunk2,
    },
  ];
  const [anchorEl, setAnchorEl] = useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="home-body">
      <div className="main-container">
        <nav className="navbar">
          <div className="brand">
            <div className="header-logo">
            <img
              src={sneaker}
              className="brand-logo"
              alt="logo"
              loading="lazy"
            />
            <p className="brand-name">QLUXURY</p>
            </div>
            <div className="menu-icon">
            <CiMenuFries
              id="basic-button"
              className="menu-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
            </div>
          </div>
          <div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Home</MenuItem>
              <MenuItem onClick={handleClose}>Login</MenuItem>
              <MenuItem onClick={handleClose}>Sign Up</MenuItem>
            </Menu>
          </div>
          <div className="nav-links">
            <ul>
              <Link to={"/"} className="link-tag">
                <li className="nav-link" id="home-link">
                  Home
                </li>
              </Link>
              <Link to={"/login"} className="link-tag">
                <li className="nav-link" id="login-link">
                  Login
                </li>
              </Link>
              <Link to={"/signup"} className="link-tag">
                <li className="nav-link" id="signup-link">
                  Sign Up
                </li>
              </Link>
            </ul>
          </div>
        </nav>
        {/* header */}
        <header className="header">
          <div className="header-left">
            <h2 className="jumbotron">
              Order <span>Your </span> Kicks anywhere
            </h2>
            <p className="jumbotron-subtext">
              Browse from our list of sneakers to place your order and have them
              delivered to you in no time. Affordable, original and sleek!
            </p>
            <div className="download-btns">
              <div className="cta-btn">
                <img src={googleplayBadge} alt="google-play-badge" />
              </div>
              <div className="cta-btn">
                <img src={appStoreBadge} alt="app-store-badge" />
              </div>
            </div>
          </div>
          <div className="header-img-container">
            <img src={sneaker} alt="sneaker" className="header-img" />
          </div>
        </header>

        {/* main */}
        <main>
          <div className="main-content">
            <h1 className="main-header">Special Kicks of the day!</h1>
            <p className="main-subtext">
              Check our specials of the day and get discounts on all our
              sneakers, accessories and swift delivery to what ever location
              within Lagos and Ibadan.
            </p>
            <div className="meals-container">
              {special_meals.map((meal, index) => {
                return (
                  <div className="special-meal">
                    <img src={meal.meal_image} alt="shoe" loading="lazy" />
                    <h3>{meal.meal_name}</h3>
                    <h4>{meal.meal_description}</h4>
                    <p>{meal.meal_price}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>

      <div className="trending-content">
        <p className="trending-subtext">Trending Products</p>
        <div className="trending-container">
          {trending_products.map((meal, index) => {
            return (
              <div className="trending-meal">
                <div className="trending-img">
                  <img src={meal.meal_image} alt="shoe" loading="lazy" />
                </div>
                <div className="trending-title">
                  <h3>{meal.meal_name}</h3>
                  <p>{meal.meal_description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="explore-subtext">More To Explore</p>
        <div className="explore-container">
          {explore_products.map((meal, index) => {
            const mealStyle = {
              backgroundImage: `url(${meal.meal_image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundPadding: "50px",
              color: "white",
              textAlign: "center",
              padding: "10px",
              // width: 500,
              borderRadius: "5px",
              // height: 500,
            };

            return (
              <div className="explore-meal" style={mealStyle}>
                <div className="explore-title">
                  <h3>{meal.meal_name}</h3>
                  {/* <p>{meal.meal_description}</p> */}
                  <div className="explore-button">
                    <p>Shop</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <footer id="footer">
        <div className="mailist-section">
          <div className="mailist-left">
            <h2 className="mailist-header">Get notified when we update!</h2>
            <p className="mailist-subtext">
              Get notified when we add new items to our specials menu, update
              our price list of have promos!
            </p>
          </div>
          <div className="email-container">
            <input
              type="text"
              placeholder="YourEmail@gmail.com"
              className="email"
            ></input>
            <button className="email-btn">Get notified</button>
          </div>
        </div>
        <div className="footer-top">
          <div className="footer-item">
            <h4 className="footer-header">Company</h4>
            <ul className="items-container">
              <li className="item">About Us</li>
              <li className="item">Careers</li>
              <li className="item">Contact Us</li>
            </ul>
          </div>

          <div className="footer-item">
            <h4 className="footer-header">Support</h4>
            <ul className="items-container">
              <li className="item">Help Center</li>
              <li className="item">Safety Center</li>
            </ul>
          </div>

          <div className="footer-item">
            <h4 className="footer-header">Legal</h4>
            <ul className="items-container">
              <li className="item">Cookies Policy</li>
              <li className="item">Privacy Policy</li>
              <li className="item">Terms of Service</li>
              <li className="item">Dispute resolution</li>
            </ul>
          </div>

          <div className="footer-item">
            <h4 className="footer-header">Install</h4>
            <ul className="items-container">
              <li className="item">
                <img src={googleplayBadge} alt="appstorebadge" />
              </li>
              <li className="item">
                <img src={appStoreBadge} alt="playstorebadge" />
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 QLUXURY, All rights reserved</p>
          <div className="socials">
            <img src={social1} alt="instagram" className="soial-icon" />
            <img src={social2} alt="twitter" className="soial-icon" />
            <img src={social3} alt="youtube" className="soial-icon" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
