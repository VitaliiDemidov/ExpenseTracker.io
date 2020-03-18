import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export const AddTranscription = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: +amount
    };
    addTransaction(newTransaction);
  };
  return (
    <>
      <h3>Додати Опис</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Текст</label>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Введіть текст..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Сума <br />
            (негативне - витрати, позитивне - прибуток)
          </label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            placeholder="Введіть сумму..."
          />
        </div>
        <button className="btn">Додати транзакцію</button>
      </form>
    </>
  );
};
