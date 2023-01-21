import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartDataReducer = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART", action);
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      console.log("REMOVE_FROM_CART", action);
      data.length = data.length - 1;
      return [...data];
    case EMPTY_CART:
      console.log("EMPTY_CART", action);
      return;
    default:
      return data;
  }
};
