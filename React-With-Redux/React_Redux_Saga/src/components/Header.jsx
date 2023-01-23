import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const result = useSelector((state) => state.cartDataReducer);
  console.log("redux data in header", result);

  return (
    <div className="header">
      <Link to="/">
        <h1 style={{color: 'grey'}}>Home</h1>
      </Link>
      <Link to="/cart">
        <div className="cart-div">
          <span className="cart-items-quantity">{result.length}</span>
          <img src="../src/assets/cart.png" />
        </div>
      </Link>
    </div>
  );
}
