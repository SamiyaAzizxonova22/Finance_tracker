import { useState } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "../firebase/config";

import { useAuthContext } from "./useAuthContext";

export function useSignup() {
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (displayName, email, password) => {
    setIspending(true);
    setError(null);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (!res) {
        throw new Error("Could not completed signup");
      }
      await updateProfile(auth.currentUser, { displayName });
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
  return { error, isPending, signup, updateProfile };
}
