import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

const addToCart = (data) => {
  console.log("add to cart action called", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

const removeFromCart = (data) => {
  console.log("remove from cart action called", data);
  return {
    type: REMOVE_FROM_CART,
    data: data,
  };
};

const emptyCart = () => {
  console.log("empty cart action called");
  return {
    type: EMPTY_CART,
  };
};

export { addToCart, removeFromCart, emptyCart };
