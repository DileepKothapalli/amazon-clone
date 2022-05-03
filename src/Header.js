import React from "react";
import "./Header.css";
import logo from "./images/amazon_logo.png";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt=""></img>
      <LocationOnOutlinedIcon className="header__location" />
      <div className="header__address">
        <span className="header__lineone">Hello</span>
        <span className="header__linetwo">Select your adddress</span>
      </div>
      <div className="header__search">
        <form>
          <input className="header__search__input" />
          <button className="header__search__button">
            <SearchIcon />
          </button>
        </form>
      </div>
      <div className="header__right">
        <div className="header__option">
          <span className="header__lineone">
            <Link to="/Auth" className="header__lineone">
              Hello, Sign in
            </Link>
          </span>
          <span className="header__linetwo">Account & lists</span>
        </div>
        <div className="header__option">
          <span className="header__lineone">Return</span>
          <span className="header__linetwo">& Orders</span>
        </div>
        <div className="header__cart">
          <ShoppingCartOutlinedIcon />
          <span>Cart</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
