// PrivateRoute.js
import React from "react";
import { useAuth } from "./useAuth";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ element, ...rest }) => {
  const { currentUser } = useAuth();

  return currentUser ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
