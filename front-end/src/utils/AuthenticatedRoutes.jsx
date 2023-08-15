import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { getAuth } from "./auth";

const AuthenticatedRoutes = () => {
  const token = getAuth();

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthenticatedRoutes;
