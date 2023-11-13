import { createBrowserRouter } from "react-router-dom";
import Login from "../views/Authentication";
import LandingPage from "../views/LandingPage";

export const AppRoute = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/authentication",
    element: <Login />,
  },
]);
