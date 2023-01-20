import {ADD_TO_CART} from './constant';

const addToCart = (data) => {
  console.log("action called", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export default addToCart;
