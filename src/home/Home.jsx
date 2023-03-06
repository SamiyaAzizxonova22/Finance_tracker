import React from "react";
import Transactions from "./Transactions";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCollection } from "../hooks/useCollection";
import TransactionsList from "./TransactionsList";

function Home() {
  const { user } = useAuthContext();
  const { list } = useCollection("transactions");

  return (
    <div className="flex justify-between">
      <div>{list && <TransactionsList list={list} />}</div>
      <div>
        <Transactions uid={user.uid} />
      </div>
    </div>
  );
}

export default Home;
