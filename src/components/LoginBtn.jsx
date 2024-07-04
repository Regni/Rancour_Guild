import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const LoginBtn = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  return !user ? (
    <NavLink className="navItemLink" to="/login">
      Login
    </NavLink>
  ) : (
    <div>
      <span>User: {user.username}</span>
      <button onClick={logout}>Log out</button>
    </div>
  );
};

export default LoginBtn;
