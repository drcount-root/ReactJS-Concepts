import { addToCart, removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";

function Main() {
  const dispatch = useDispatch();

  const product = {
    name: "iPhone",
    type: "mobile",
    price: 79000,
    color: "white",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "9px",
      }}
    >
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
      <button onClick={() => dispatch(removeFromCart(product))}>
        Remove From Cart
      </button>
    </div>
  );
}

export default Main;
