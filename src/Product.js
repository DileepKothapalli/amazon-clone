import React from "react";
import "./Product.css";
import alexa from "./images/alexa.jpg";

const Product = () => {
  return (
    <div className="Product">
      <img className="Product__img" src={alexa} alt=""></img>
      <span className="Product__info">
        Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa
      </span>
      <span className="Product__price">3299</span>
      <button className="Product__button">Add to cart</button>
    </div>
  );
};

export default Product;
