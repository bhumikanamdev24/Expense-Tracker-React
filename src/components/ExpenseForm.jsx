import { useState } from "react";

export default function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title || !amount || !date) {
      alert("Please fill all fields");
      return;
    }

    onAddExpense({
      title,
      amount: Number(amount),
      date,
    });

    // Clear form
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button type="submit">Add Expense</button>
    </form>
  );
}
