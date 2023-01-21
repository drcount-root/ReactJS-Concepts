import { addToCart, removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";

function Main() {
  const dispatch = useDispatch();

  const product = {
    id: "2y53W",
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
      <button onClick={() => dispatch(removeFromCart(product.id))}>
        Remove From Cart
      </button>
      <button onClick={() => dispatch(removeFromCart(product))}>
        Empty Cart
      </button>
    </div>
  );
}

export default Main;
