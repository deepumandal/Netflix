import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../utils/Firebase";
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const loc = useLocation();

  // console.log("auth", auth);
  if (isAuthenticated) return children;
  return <Navigate to={"/authentication"} state={loc} />;
};

export default PrivateRoute;
