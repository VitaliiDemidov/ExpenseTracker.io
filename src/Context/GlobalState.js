import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  transactions: [
    { id: 1, text: "Квіти", amount: -20 },
    { id: 2, text: "Зарплата", amount: 300 },
    { id: 3, text: "Книга", amount: -10 },
    { id: 4, text: "Камера", amount: 150 }
  ]
};

//create context

export const GlobalContext = createContext(initialState);

//provaider component
export const GlobalProvaider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
