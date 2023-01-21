import { SET_PRODUCT_LIST } from "./constant";

export const productDataReducer = (data = [], action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST:
      console.log("SET_PRODUCT_LIST", action);
      return [...action.data];
    default:
      return data;
  }
};
