import React from "react";
import "./Auth.css";

import Logo from "./images/Amazon_black.png";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className="Auth">
      <Link to="/">
        <img className="Logo" src={Logo} alt=""></img>
      </Link>
      <div className="Auth__form">
        <h1>Create Account</h1>
        <form>
          <p>Email</p>
          <input />
          <p>Password</p>
          <input />
          <br></br>
          <button>Continue</button>
          <p>
            Already have an account? <Link className="link">Sign in</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Auth;
