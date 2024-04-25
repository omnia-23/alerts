import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FilterProvider } from "./utils/showFilters";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FilterProvider>
      <App />
    </FilterProvider>
  </React.StrictMode>
);
