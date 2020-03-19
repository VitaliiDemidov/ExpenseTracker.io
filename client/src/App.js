import React from "react";
import { Header } from "./Components/Header";
import { Balance } from "./Components/Balance";
import { IncomeExpenses } from "./Components/IncomeExpenses";
import { TransactionList } from "./Components/TransactionList";
import { AddTranscription } from "./Components/AddTranscription";
import { GlobalProvaider } from "./Context/GlobalState";
import "./App.css";

function App() {
  return (
    <GlobalProvaider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTranscription />
      </div>
    </GlobalProvaider>
  );
}

export default App;
