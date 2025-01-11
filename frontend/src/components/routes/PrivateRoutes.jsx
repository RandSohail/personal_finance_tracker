import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "../../services";

const PrivateRoutes = () => {
  const token = getCookie("authToken");

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
