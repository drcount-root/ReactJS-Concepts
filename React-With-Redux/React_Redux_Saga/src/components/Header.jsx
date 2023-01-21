import React from "react";

import { useSelector } from "react-redux";

export default function Header() {
  const result = useSelector((state) => state.cartDataReducer);
  console.log('redux data in header', result);

  return (
    <div className="header">
      <div className="cart-div">
        <span className="cart-items-quantity">{result.length}</span>
        <img src="../src/assets/cart.png" />
      </div>
    </div>
  );
}
