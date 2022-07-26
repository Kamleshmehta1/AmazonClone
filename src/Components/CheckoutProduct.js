import React from "react";
import "./CheckoutProduct.css"
import { UseStateValue } from "./StateProvider";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{}, dispatch] = UseStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkout__product">
      <img src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkout__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
