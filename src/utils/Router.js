import React from "react";
import { Outlet, createHashRouter } from "react-router-dom";
const Login = React.lazy(() => import("../views/Authentication"));
const LandingPage = React.lazy(() => import("../views/LandingPage"));
const Navbar = React.lazy(() => import("../components/Navbar"));
const PrivateRoute = React.lazy(() => import("../HOC/PrivateRoute"));

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export const AppRoute = createHashRouter([
  {
    path: "/",
    element: (
      // <PrivateRoute>
      <AppLayout />
      // </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
  {
    path: "/authentication",
    element: <Login />,
  },
]);
