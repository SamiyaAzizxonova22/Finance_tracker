import { useState } from "react";
import { auth, signOut } from "../firebase/config";

import { useAuthContext } from "./useAuthContext";

export function useLogout() {
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setIspending(true);
    setError(null);
    try {
      await signOut(auth);
      // dispatch
      dispatch({ type: "LOGOUT" });

      setIspending(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
      setIspending(false);
    }
  };
  return { error, isPending, logout };
}
