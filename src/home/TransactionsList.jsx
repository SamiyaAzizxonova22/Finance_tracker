import React from "react";

function TransactionsList({ list }) {
  return (
    <div>
      {list.map((item) => {
        return (
          <div
            key={item.name}
            className="border border-rose-100 border-l-4 text-rose-500 py-2 text-2xl px-4 border-l-rose-900 bg-pink-200 w-96 mb-3 rounded flex justify-between"
          >
            <h1>{item.name}</h1>
            <p>{item.amount}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TransactionsList;
