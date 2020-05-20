import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import GlobalStyles from "./Styles/GlobalStyles";

ReactDOM.render(
  <div>
    <GlobalStyles />
    <Routes />
  </div>,
  document.getElementById("root")
);
