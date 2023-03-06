import { onSnapshot, collection, db } from "../firebase/config";
import { useState, useEffect } from "react";

export function useCollection(collect) {
  const [list, setList] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    onSnapshot(collection(db, collect), (data) => {
      const results = [];
      data.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      console.log(results);
      setError(null);
      setList(results.reverse());
    });
  }, []);

  return { list };
}
