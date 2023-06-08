import React from 'react'
import coupon from "../images/coupon.png"
import { useState, useEffect } from 'react';
import coupon2 from "../images/dunk4.jpg"

const colors = ["#0088FE", "#8D00C4", "#FFBB28"];
const delay = 3000;

function Slideshow() {
// Create state variables for the index and content array
const [index, setIndex] = useState(0);
const content = [
  {
    text: "Black Friday!!!\nFlash Sale",
    image: coupon
  },
  {
    text: "Cyber Monday!!!\nLimited Time Offer",
    image: coupon2
  },
  {
    text: "Holiday Sale!!!\nGet 50% Off",
    image: coupon
  }
];

// Use useEffect to increment the index every 5 seconds
useEffect(() => {
  const intervalId = setInterval(() => {
    setIndex(prevIndex => (prevIndex + 1) % content.length);
  }, 4000);

  return () => clearInterval(intervalId);
});

// Render the current slide
return (
  <div className="slideshow">
    <img src={content[index].image} alt="slider" />
    <div className="slide-text">{content[index].text}</div>
  </div>
);
}

export default Slideshow;