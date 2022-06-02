import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formState, setFormState] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const onOpenFormHandler = () => {
    setFormState(true);
  };

  return (
    <div className="new-expense">
      {!formState && (
        <button onClick={onOpenFormHandler}>Add New Expense</button>
      )}
      {formState && (
        <ExpenseForm
          closeForm={setFormState}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
