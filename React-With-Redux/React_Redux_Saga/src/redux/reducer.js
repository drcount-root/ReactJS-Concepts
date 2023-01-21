import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";

export const cartDataReducer = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART", action);
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      console.log("REMOVE_FROM_CART", action);
      return [action.data, ...data];
    default:
      return data;
  }
};
