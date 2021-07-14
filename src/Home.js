import React from "react";
import background from "../src/images/background.jpg";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div>
      <img className="background__image" src={background}></img>
      <div className="product__row">
        <Product />
        <Product />
      </div>
      <div className="product__row">
        <Product />
        <Product />
        <Product />
      </div>
      <div className="product__row">
        <Product />
        <Product />
        <Product />
      </div>
      <div className="product__row">
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Home;
