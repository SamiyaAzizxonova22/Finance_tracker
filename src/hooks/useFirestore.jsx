import { useReducer } from "react";
import { Timestamp, collection, addDoc, db } from "../firebase/config";

let initialState = {
  document: null,
  isPending: false,
  success: false,
  error: null,
};

const useInitialState = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { ...state, isPending: action.payload };
    case "ADD_DOCUMENT":
      return {
        document: action.payload,
        isPending: false,
        success: true,
        error: null,
      };
    case "ERROR":
      return {
        document: null,
        isPending: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export function useFirestore(collect) {
  const [response, dispatch] = useReducer(useInitialState, initialState);

  // console.log(response);

  // addDocument
  const addDocument = async (doc) => {
    // Add a new document widtha genereted id
    dispatch({ type: "IS_PENDING", payload: true });

    const createdAt = Timestamp.fromDate(new Date());

    const docRef = await addDoc(collection(db, collect), {
      ...doc,
      createdAt,
    });
    // dispatch({ type: "ADD_DOCUMENT", payload: docRef });
    console.log(docRef);
  };

  // deleteDocument
  const deleteDocument = (id) => {};
  return { addDocument, deleteDocument, response };
}
