import React, { useEffect, useState } from "react";
import { useFirestore } from "../hooks/useFirestore";

function Transactions({ uid }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { addDocument, response } = useFirestore("transactions");

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({ name, amount, uid });
    console.log({ name, amount, uid });
  };

  useEffect(() => {
    if (response.success) {
      setName("");
      setAmount("");
    }
  }, [response.success]);
  return (
    <div className="w-96 bg-rose-300 py-5 px-4 rounded">
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="block mb-1 text-sm font-medium text-white dark:text-gray-900">
            Name:
          </span>
          <input
            type="text"
            className="outline-rose-300 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
            value={name}
          />
        </label>
        <label className="block mb-4">
          <span className="block mb-1 text-sm font-medium text-white dark:text-gray-900">
            Amount
          </span>
          <input
            type="number"
            className="outline-rose-300 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Amount"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            required
            value={amount}
          />
        </label>
        <button className=" bg-rose-400 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded-full">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Transactions;
