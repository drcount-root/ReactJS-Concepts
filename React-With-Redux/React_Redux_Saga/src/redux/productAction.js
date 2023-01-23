import { PRODUCT_LIST, SET_PRODUCT_SEARCH } from "./constant";

export const productList = () => {
  return {
    type: PRODUCT_LIST
  };
};

export const productSearch = (query) => {
  return {
    type: SET_PRODUCT_SEARCH,
    query: query
  };
};