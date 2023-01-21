import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";

const addToCart = (data) => {
  console.log("add action called", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

const removeFromCart = (data) => {
  console.log("remove action called", data);
  return {
    type: REMOVE_FROM_CART,
    data: data,
  };
};

export { addToCart, removeFromCart };
