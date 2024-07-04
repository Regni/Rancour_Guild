import { AuthContext } from "../context/AuthContext.jsx";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext is outside of the provider!");
  }

  return context;
};
