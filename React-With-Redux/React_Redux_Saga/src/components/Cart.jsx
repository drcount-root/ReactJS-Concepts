import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Cart() {
  const cartData = useSelector((state) => state.cartDataReducer);

  return (
    <div>
      <Link to="/">
        <h1 style={{ color: "grey" }}>Product List</h1>
      </Link>
      <h1>Cart</h1>
      {/* <Routes>
        <Route path="/" element={<Main />} />
      </Routes> */}

      <div>
        <table>
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
      </div>
    </div>
  );
}

export default Cart;