import { combineReducers } from "redux";

import { cartDataReducer } from "./reducer";
import { productDataReducer } from "./productReducer";

export default combineReducers({
  cartDataReducer,
  productDataReducer,
});
