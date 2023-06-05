import React from "react";
import Modal from "./Modal";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "../css/Modal.css";
import { addItem, updateItem } from "../Redux/features/cartSlice";
import { useSelector } from "react-redux";

const Product = (props) => {
  const toggleModal = useSelector((state) => state.modal.IsOpen);
  const product = useSelector((state) => state.product.product);
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [orderAmount, setOrderAmount] = useState(1);

  function ChangeAmount(operation) {
    if (operation === "subtract" && orderAmount > 1) {
      setOrderAmount(orderAmount - 1);
    } else if (operation === "add") {
      setOrderAmount(orderAmount + 1);
    } else {
      setOrderAmount(1);
    }
  }

  function addToCart() {
    const prevOrdered = cartItems.find((meal) => meal.id === product.id);
    if (prevOrdered !== undefined) {
      dispatch(updateItem({ id, orderAmount, price: product.MealPrice }));
    } else {
      dispatch(addItem({ id, orderAmount, price: product.MealPrice }));
    }
    setOrderAmount(1);
    navigate("/dashboard/home");
  }
  return (
    toggleModal && (
      <Modal>
        <div className="modal__content">
          <img src={product.MealImage} alt="food" className="modal-img" />
          <h3 className="order-name">{product.MealName}</h3>
          <p className="order-description">
            A springy ride for every run, the Peg's familiar, just-for-you feel
            returns to help you accomplish your goals. This milestone version
            has the same responsiveness you love, but with better comfort in
            those sensitive areas of your foot, like the arch and toes.
            
          </p>
          <div className="order-details-conatiner">
            <h4>N{product.MealPrice}</h4>
            <h4>{product.MealDescription}</h4>
            <h4>Available</h4>
          </div>

          <div className="order-details-conatiner">
            <div className="order-controls">
              <button
                style={
                  orderAmount === 1
                    ? { backgroundColor: "lightgrey" }
                    : { backgroundColor: "rgb(243, 195, 149)" }
                }
                className="control-btn subtract"
                onClick={() => ChangeAmount("subtract")}
              >
                -
              </button>
              <p className="order-quantity">{orderAmount}</p>
              <button
                className="control-btn add"
                onClick={() => ChangeAmount("add")}
              >
                +
              </button>
            </div>

            <div>
              <button className="add-order-btn" onClick={() => addToCart()}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </Modal>
    )
  );
};

export default Product;
