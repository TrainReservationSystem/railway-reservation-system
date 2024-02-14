import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./style.css";
import { SearchDataProvider } from "./contexts/SearchDataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SearchDataProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SearchDataProvider>
);
