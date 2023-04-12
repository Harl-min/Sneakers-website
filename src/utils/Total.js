import React from "react";
import { useSelector } from "react-redux";


const Total = (props) => {
const cartItems = useSelector((state) => state.cart.cart);
const multipliedValue = cartItems.map((item)=> item.orderAmount * item.price)
  const total = multipliedValue.reduce(
    (prevValue, currentValue) => prevValue + currentValue,
    0 
  );
  return <p className="total__price">{"₦" + new  Intl.NumberFormat().format(total)}</p>;
};

export default Total;
