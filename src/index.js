import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducers";
import GlobalStyles from "./Styles/GlobalStyles";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <Routes />
  </Provider>,
  document.getElementById("root")
);
