import "../css/Dashboard.css";
import profileImage from "../images/profile-img.png"
import FoodCard from "./FoodCard";
import Sidebar from "./Sidebar";
import logo from "../images/logo.svg";
import sneakerlogo from "../images/sneaker.png";
import { AvailableMeals } from "../Data/data";
import { Outlet } from "react-router-dom";


function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="navbar-container">
        <img src={sneakerlogo} alt='lilies'/>
        <button id="hamburger-menu">
          <nav id="sidebar-menu"></nav>
        </button>
      </div>
      <Sidebar />
      <div className="dashboard">
        <div className="dashboard-header">
          <div>
            <p>Good morning, Harl!</p>
            <p>What style are you rocking today?</p>
          </div>
          <div>
            <img src={profileImage} alt="profile-pic" />
          </div>
        </div>
        <div className="dashboard-main">
          {AvailableMeals.map((meal) => {
            return (
              <FoodCard
                foodName={meal.MealName}
                foodImage={meal.MealImage}
                foodDescription={meal.MealDescription}
                foodPrice={meal.MealPrice}
                key={meal.id.toString()}
                id={meal.id}
                meal={meal}
              />
            );
          })}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
