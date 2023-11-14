import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const loc = useLocation();

  if (isAuthenticated) return children;
  return <Navigate to={"/authentication"} replace={true} state={loc} />;
};

export default PrivateRoute;
