import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";

import { useSelector } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productDataReducer);
  console.log("data in main component", data);

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
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      <button onClick={() => dispatch(productList())}>Get Product List</button>
    </div>
  );
}

export default Main;
