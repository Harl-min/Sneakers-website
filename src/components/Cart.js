import React from "react";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import { AvailableShoes } from "../Data/data";
import { removeItem } from "../Redux/features/cartSlice";
import Total from "../utils/Total";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const toggleModal = useSelector((state) => state.modal.IsOpen);
  const cartItems = useSelector((state) => state.cart.cart);
  const getcartItems = cartItems.map((item) =>
    AvailableShoes.find((meal) => meal.id === item.id)
  );
  const dispatch = useDispatch();

  return (
    <>
      {toggleModal && (
        <Modal>
          {cartItems.length === 0 ? (
            <p className="empty__cart">Your cart is empty</p>
          ) : (
            <div className="cart__container">
              <table className="table" cellPadding="100">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Unit Price</th>
                    <th>Sub-total</th>
                  </tr>
                </thead>
                <tbody>
                  {getcartItems.map(
                    ({ id, ShoePrice, ShoeImage, ShoeName }) => (
                      <tr key={id}>
                        <td className="removeItem__container">
                          <img
                            className="cartItem__image"
                            alt={ShoeName}
                            src={ShoeImage}
                          />
                          <div>
                            <p className="cartItem__name">{ShoeName}</p>
                            <p
                              className="remove__item"
                              onClick={() => dispatch(removeItem(id))}
                            >
                              Remove
                            </p>
                          </div>
                        </td>
                        <td>
                          <p>
                            {
                              cartItems.find((meal) => meal.id === id)
                                .orderAmount
                            }
                          </p>
                        </td>
                        <td>
                          <p>₦ {ShoePrice}</p>
                        </td>
                        <td>
                          <p>
                            ₦
                            {Number(
                              ShoePrice *
                                cartItems.find((meal) => meal.id === id)
                                  .orderAmount
                            )}
                          </p>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
              <div className="total__container">
                <span>Total:</span>
                <Total />
              </div>

              <div className="checkout__btn__container">
                <button
                  className="checkout__btn"
                  onClick={() => navigate("/dashboard/checkout")}
                >
                  checkout {"("} <Total /> {")"}
                </button>
              </div>
            </div>
          )}
        </Modal>
      )}
    </>
  );
};

export default Cart;
