import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import "./i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={setupStore()}>
    <App />
  </Provider>
);
