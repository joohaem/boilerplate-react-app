import App from "App";
import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle``;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
