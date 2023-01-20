import { ADD_TO_CART } from "./constant";

export const cartDataReducer = (data = [], action) => {
  if (action.type === ADD_TO_CART) {
    console.log("reducer called", action);
    return action.data;
  } else {
    return "no action matched";
  }
};
