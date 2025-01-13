import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getCookie } from "../../services";
import Navbar from "../Navbar";

const PrivateRoutes = () => {
  const token = getCookie("authToken");

  return token ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
