import { Routes, Route, Link } from "react-router-dom";

function Cart() {
  return (
    <div>
      <Link to="/">
        <h1 style={{ color: "grey" }}>Product List</h1>
      </Link>
      <h1>Cart</h1>
      {/* <Routes>
        <Route path="/" element={<Main />} />
      </Routes> */}
    </div>
  );
}

export default Cart;
