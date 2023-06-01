import React from 'react'
import profileImage from "../images/profile-img.png"
import FoodCard from "./FoodCard";
import { AvailableShoes } from "../Data/data";
import Slideshow from "./Slider";

const DashProducts = () => {
  return (
    <>
     <div className="dashboard">
        <div className="dashboard-header">
          <div>
            <p>Good morning, Harl!</p>
            <p>What style are you rocking today?</p>
          </div>
         
        </div>

        <div className="slide">
        <Slideshow />
        </div>
        
        <div className="dashboard-main">
          {AvailableShoes.map((meal) => {
            return (
              <FoodCard className="foodcard"
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
    </>
  );
}

export default DashProducts
  
  
  
  