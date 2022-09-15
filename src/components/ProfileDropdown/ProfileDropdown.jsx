import React from "react";
import { Link } from "react-router-dom";

import "./ProfileDropdown.css";

export default function ProfileDropdown({ isActive }) {
  return (
    <div
      className={`profileDropdown ${
        isActive ? "profileDropdown__isActive" : ""
      }`}
    >
      <Link to={"/profile"}>Settings</Link>
      <Link to={"/register"}>Login</Link>
      <Link to={"/register"}>Signin</Link>
    </div>
  );
}
