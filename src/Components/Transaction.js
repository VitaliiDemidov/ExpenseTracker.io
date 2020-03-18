import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

// Transaction view
export const Transaction = ({ transaction }) => {
  const { delateTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}₴{Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => delateTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};
