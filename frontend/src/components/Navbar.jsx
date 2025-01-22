import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "./AntDesign";
import { getCookie } from "../services";
import "./Landing/style.css";

export default function NavBar() {
  const token = getCookie("authToken");

  return (
    <nav className="navbar-container">
      <NavLink
        to={"/"}
        style={{
          fontWeight: "bold",
          fontSize: "19px",
          color: "#000e3d",
          textDecoration: "none",
        }}
      >
        Finance Tracker
      </NavLink>
      <Menu className="nav-bar">
        {token ? (
          <>
            <NavLink to="/profile">Profile</NavLink> |
            <NavLink to="/transaction">Transaction</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/signup">Signup</NavLink>|
            <NavLink to="/login">Login</NavLink>
          </>
        )}
      </Menu>
    </nav>
  );
}
