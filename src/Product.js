import React from "react";
import "./Product.css";
import alexa from "./images/alexa.jpg";

const Product = () => {
  return (
    <div className="Product">
      <h1>Alexa</h1>
      <img className="Product__img" src={alexa}></img>
    </div>
  );
};

export default Product;
