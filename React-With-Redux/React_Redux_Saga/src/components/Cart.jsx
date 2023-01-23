import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../App.css";

function Cart() {
  const cartData = useSelector((state) => state.cartDataReducer);

  let amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);

  return (
    <div>
      <Link to="/">
        <h4 style={{ color: "black" }}>Product List</h4>
      </Link>
      <h1>Cart</h1>
      {/* <Routes>
        <Route path="/" element={<Main />} />
      </Routes> */}

      <div style={{ display: "flex", gap: "18px" }}>
        <table
          style={{
            display: "flex",
            width: "80%",
            backgroundColor: "white",
            color: "black",
            borderRadius: "8px",
            padding: "11px",
          }}
        >
          <tbody>
            <tr>
              <th>Name</th>
              <th>Color</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Category</th>
            </tr>
            {cartData.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.color}</td>
                  <td>{item.price}</td>
                  <td>{item.brand}</td>
                  <td>{item.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div
          style={{
            display: "flex",
            width: "20%",
            justifyContent: "space-around",
            flexDirection: "column",
            backgroundColor: "white",
            color: "black",
            borderRadius: "8px",
            padding: "11px",
          }}
        >
          <div>
            <span>Amount</span>
            <span> : </span>
            <span>{amount}</span>
          </div>
          <div>
            <span>Discount</span>
            <span> : </span>
            <span>{amount / 10}</span>
          </div>
          <div>
            <span>Tax</span>
            <span> : </span>
            <span>{(amount * 5) / 100}</span>
          </div>
          <div>
            <span>Total</span>
            <span> : </span>
            <span>{amount - amount / 10 + (amount * 5) / 100}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
