import "./App.css";

import addToCart from "./redux/action";
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
    <div className="App">
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
    </div>
  );
}

export default App;
