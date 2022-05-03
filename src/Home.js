import React from "react";
import background from "../src/images/background.jpg";
import "./Home.css";
import Product from "./Product";
import { useEffect, useState } from "react";
import firebase from "./firebase";

const Home = () => {
  const [Products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(false);

  const db = firebase.firestore().collection("products");

  function getProducts() {
    setLoading(true);
    db.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setProducts(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getProducts();
  }, []);

  console.log(Products[0]?.info);
  if (Loading) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <div>
        <h1>hello</h1>
        <h1>{Products[0]?.info}</h1>
        <h1>hello</h1>
      </div>

      <img className="background__image" src={background} alt=""></img>
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
