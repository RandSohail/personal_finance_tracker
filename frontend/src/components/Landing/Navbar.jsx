import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Text } from "../AntDesign";
import { getCookie } from "../../services";
import "./style.css";

export default function NavBar() {
  const token = getCookie("authToken");

  return (
    <nav className="navbar-container">
      <Text style={{ fontWeight: "bold", fontSize: "19px" }}>
        Finance Tracker
      </Text>
      <Menu className="nav-bar">
        {token ? (
          <>
            <NavLink to="/profile">Profile</NavLink>
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
