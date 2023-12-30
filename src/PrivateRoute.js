// PrivateRoute.js
import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "./useAuth";

const PrivateRoute = ({ element, ...rest }) => {
  const { currentUser } = useAuth();

  return currentUser ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
