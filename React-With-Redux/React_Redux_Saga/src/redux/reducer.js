import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";

export const cartDataReducer = (data = [], action) => {
  // if (action.type === ADD_TO_CART) {
  //   console.log("reducer called", action);
  //   return action.data;
  // } else {
  //   return "no action matched";
  // }

  switch(action.type){
    case ADD_TO_CART:
      console.log('ADD_TO_CART', action);
      return 1+1;
    case REMOVE_FROM_CART:
      console.log('REMOVE_FROM_CART', action);
      return 1-1;
    default:
      return 'No action needed'
  }
};
