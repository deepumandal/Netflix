import { createBrowserRouter } from "react-router-dom";
import Login from "../views/Authentication";
import LandingPage from "../views/LandingPage";
import PrivateRoute from "../HOC/PrivateRoute";

export const AppRoute = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <LandingPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/authentication",
    element: <Login />,
  },
]);
