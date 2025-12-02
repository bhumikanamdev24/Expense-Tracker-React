import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return <p className="no-data">No expenses added yet.</p>;
  }

  return (
    <div className="list">
      {expenses.map((item) => (
        <ExpenseItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </div>
  );
}
