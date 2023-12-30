// Logout.js
import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../useAuth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
    logout();
  };

  return <Link onClick={handleLogout}>Logout</Link>;
};

export default Logout;
