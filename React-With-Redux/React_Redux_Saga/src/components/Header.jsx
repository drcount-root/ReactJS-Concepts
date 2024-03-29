import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { productSearch } from "../redux/productAction";

export default function Header() {
  const result = useSelector((state) => state.cartDataReducer);
  console.log("redux data in header", result);

  const dispatch = useDispatch();

  return (
    <div className="header">
      <Link to="/">
        <h1 style={{ color: "grey" }}>Home</h1>
      </Link>
      <div>
        <input
          type="text"
          placeholder="Search product"
          style={{
            backgroundColor: "white",
            padding: "5px",
            borderRadius: "5px",
            color: "black",
            marginTop: "8px",
          }}
          onChange={(event) => dispatch(productSearch(event.target.value))}
        />
      </div>
      <Link to="/cart">
        <div className="cart-div">
          <span className="cart-items-quantity">{result.length}</span>
          <img src="../src/assets/cart.png" />
        </div>
      </Link>
    </div>
  );
}
