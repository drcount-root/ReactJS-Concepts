import { takeEvery, put } from "redux-saga/effects";
import { ADD_TO_CART, PRODUCT_LIST, SET_PRODUCT_LIST } from "./constant";

function* getProducts() {
  let data = yield fetch("http://localhost:3001/products");
  data = yield data.json();

  yield put({ type: SET_PRODUCT_LIST, data });
}

// function* testCart() {
//     console.log("call api here");
//   }

// generator function used here to handle async operations
// generator function must have yield
function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  //   yield takeEvery(ADD_TO_CART, testCart);
}

export default productSaga;
