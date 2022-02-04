import React from "react";
import ReactDOM from "react-dom";
import App from "App";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle``;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
