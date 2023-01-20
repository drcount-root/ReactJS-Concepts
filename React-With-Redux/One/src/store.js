// import { createStore } from "redux";

import {configureStore} from '@reduxjs/toolkit'

import rootReducer from "./reducers/index";

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// this is the global store

const store = configureStore({reducer: rootReducer})

export default store;
