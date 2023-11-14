import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import { AppRoute } from "./utils/Router";
import { Provider } from "react-redux";
import { reduxStore } from "./reduxStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={reduxStore}>
    <RouterProvider router={AppRoute}>
      <App />
    </RouterProvider>
  </Provider>
);
