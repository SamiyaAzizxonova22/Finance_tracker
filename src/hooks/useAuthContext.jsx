import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext() must be in the AuthContextProvider");
  }

  return context;
}
