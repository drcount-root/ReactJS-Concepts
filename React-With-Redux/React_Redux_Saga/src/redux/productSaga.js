import { takeEvery, put } from "redux-saga/effects";
import {
  ADD_TO_CART,
  PRODUCT_LIST,
  SET_PRODUCT_LIST,
  SET_PRODUCT_SEARCH,
} from "./constant";

function* getProducts() {
  let data = yield fetch("http://localhost:3001/products");
  data = yield data.json();

  yield put({ type: SET_PRODUCT_LIST, data });
}

function* searchProducts(data) {
  let result = yield fetch(`http://localhost:3001/products?q=${data.query}`);
  result = yield result.json();
  console.log(result);
  yield put({ type: SET_PRODUCT_LIST, data: result });
}

// function* testCart() {
//     console.log("call api here");
//   }

// generator function used here to handle async operations
// generator function must have yield
function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  // param1- call on which action
  // param2- the function which will be called on the action (param1)
  yield takeEvery(SET_PRODUCT_SEARCH, searchProducts);

  // yield takeEvery(ADD_TO_CART, testCart);
}

export default productSaga;
