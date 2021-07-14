import React from "react";
import "./Cart.css";
import ad from "./images/ad.png";
const Cart = () => {
  return (
    <div className="Cart">
      <div className="cart__details">card details </div>
      <div className="cart__checkout">
        <img src={ad} alt="" className="cart__ad" />
        <div className="cart__amount">
          <p>
            Your order is eligible for FREE Delivery.
            <br /> Select this option at checkout. Details
          </p>

          <h2>SubTotal (2 Items) : 25579</h2>
          <button>Proceed to buy</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
