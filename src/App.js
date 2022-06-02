import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      date: new Date(2022, 5, 10),
      title: "Car Insurance",
      amount: 294.67,
    },
    {
      id: "e2",
      date: new Date(2023, 2, 16),
      title: "Toilet Paper",
      amount: 75.56,
    },
    {
      id: "e3",
      date: new Date(2022, 6, 12),
      title: "Eelctric Bill",
      amount: 167.25,
    },
    {
      id: "e4",
      date: new Date(2022, 11, 28),
      title: "Internet and Mobile RC.",
      amount: 58.36,
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((PrevExpenses) => {
      return [expense, ...PrevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
