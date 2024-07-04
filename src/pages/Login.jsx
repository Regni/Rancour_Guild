import React, { useEffect, useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [login]);

  const handelSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div className="contentContainer">
      <form onSubmit={handelSubmit}>
        <h3>Log in</h3>
        <label htmlFor="usernameField">Username: </label>
        <input
          type="text"
          name=""
          id="usernameField"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="passwordField">Password: </label>
        <input
          type="password"
          name=""
          id="passwordField"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={isLoading}>Log in</button>
        {error && <div>{error}</div>}
      </form>
    </div>
  );
};

export default Login;
