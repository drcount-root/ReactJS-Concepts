// import { createStore } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import productSaga from "./productSaga";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";

// const store = createStore(rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productSaga);

export default store;
