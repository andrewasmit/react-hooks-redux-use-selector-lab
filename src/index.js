import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import usersReducer from "./features/users/usersSlice";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(usersReducer);

// add imports and code

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
