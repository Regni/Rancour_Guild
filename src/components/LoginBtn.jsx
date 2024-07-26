import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const LoginBtn = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/settings");
  };
  return !user ? (
    <NavLink className="navItemLink" to="/login">
      Login
    </NavLink>
  ) : (
    <div className="loginbutton">
      <span>User: {user.username}</span>
      <button onClick={logout}>Log out</button>
      <button onClick={handleClick}>settings</button>
    </div>
  );
};

export default LoginBtn;
