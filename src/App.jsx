import { useState, useEffect } from "react";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";

function App() {
  // Load saved expenses from localStorage OR start with empty list
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  // Save every update to localStorage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Add new Expense
  const addExpense = (expense) => {
    const newExpense = { ...expense, id: Date.now() }; 
    setExpenses([newExpense, ...expenses]);
  };

  // Delete Expense
  const deleteExpense = (id) => {
    const updated = expenses.filter((item) => item.id !== id);
    setExpenses(updated);
  };

  return (
    <div className="container">
      <Header />
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}

export default App;
