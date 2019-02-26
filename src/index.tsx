import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.scss";
import * as serviceWorker from "./serviceWorker";

import { configureStore } from "./store";
import App from "./App";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "1rem"
      }}
    >
      <div style={{ display: "flex" }}>
        <App />
      </div>
    </div>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
