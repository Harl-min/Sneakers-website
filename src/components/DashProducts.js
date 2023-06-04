import React from 'react'
import profileImage from "../images/profile-img.png"
import FoodCard from "./FoodCard";
import { AvailableShoes } from "../Data/data";
import Slideshow from "./Slider";
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import TuneSharpIcon from '@mui/icons-material/TuneSharp';

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

        <div className="subheader">
          <p>Men's Shoes</p>

          <div className="filter">
          <p>Filter </p><TuneSharpIcon></TuneSharpIcon>
          <p>Sort By </p><ExpandMoreSharpIcon></ExpandMoreSharpIcon>
          </div>
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
  
  
  
  