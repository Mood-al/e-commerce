import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductProvider } from "./contexts/context";
ReactDOM.render(
  <ProductProvider>
    <App />
  </ProductProvider>,
  document.querySelector("#root")
);
