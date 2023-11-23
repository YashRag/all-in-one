import React from "react";
import "../CSS/expenseTracker.css";
import Header from "./Header";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";
import { GlobalProvider } from "./Context/GlobalState";

const ExpenseTracker = () => {
  return (
    <GlobalProvider>
    <div className="w-screen m-2 flex flex-col items-center">
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionList/>
      <AddTransaction/>
    </div>
    </GlobalProvider>
  );
};

export default ExpenseTracker;
