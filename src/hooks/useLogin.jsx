import { useState } from "react";
import { auth, signInWithEmailAndPassword } from "../firebase/config";

import { useAuthContext } from "./useAuthContext";

export function useLogin() {
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIspending(true);
    setError(null);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      // dispatch
      dispatch({ type: "SIGNIN", payload: res.user });

      setIspending(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
      setIspending(false);
    }
  };
  return { error, isPending, login };
}
