import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// import Provider from 'react-redux' module
// import store.js
// wrap the <App/> component with Provider & pass store to the value of store
// <Provider store={store}>
//  <App/>
// </Provider>
