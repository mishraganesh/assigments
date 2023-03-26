import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

function Header() {
  return (
    <div className="header">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/Login"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        Login
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        Contact
      </NavLink>
    </div>
  );
}

export default Header;
