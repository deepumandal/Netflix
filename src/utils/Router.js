import React from 'react'
import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "../views/Authentication";
import LandingPage from "../views/LandingPage";
import PrivateRoute from "../HOC/PrivateRoute";
import Navbar from "../components/Navbar";

function AppLayout() {
  return (
    <>
      <Navbar />
      
      <Outlet />
    </>
  );
}

export const AppRoute = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <AppLayout />
      </PrivateRoute>
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
