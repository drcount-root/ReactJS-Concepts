import "./App.css";

import { addToCart, removeFromCart } from "./redux/action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const product = {
    name: "iPhone",
    type: "mobile",
    price: 79000,
    color: "white",
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "9px",
        padding: "18px",
        backgroundColor: "salmon",
        borderRadius: "8px",
      }}
    >
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
      <button onClick={() => dispatch(removeFromCart(product))}>
        Remove From Cart
      </button>
    </div>
  );
}

export default App;
