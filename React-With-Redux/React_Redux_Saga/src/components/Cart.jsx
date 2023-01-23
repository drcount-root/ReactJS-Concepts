import { Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import '../App.css';

function Cart() {
  const cartData = useSelector((state) => state.cartDataReducer);

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
        <table style={{display: 'flex', width:'80%',backgroundColor: 'white', color: 'black',borderRadius: '8px', padding: '11px'}}>
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
        <div style={{ display: "flex",width:'20%', gap: "35px", flexDirection: 'column', backgroundColor: 'white', color: 'black', borderRadius: '8px', padding: '11px'}}>
          <div>
            <span>Amount</span>
            <span> : </span>
            <span>000</span>
          </div>
          <div>
            <span>Discount</span>
            <span> : </span>
            <span>000</span>
          </div>
          <div>
            <span>Tax</span>
            <span> : </span>
            <span>000</span>
          </div>
          <div>
            <span>Total</span>
            <span> : </span>
            <span>000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
