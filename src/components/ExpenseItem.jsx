export default function ExpenseItem({ item, onDelete }) {
  return (
    <div className="item">
      <div>
        <h3>{item.title}</h3>
        <p>{item.date}</p>
      </div>

      <div>
        <strong>₹{item.amount}</strong>
        <button onClick={() => onDelete(item.id)}>Delete</button>
      </div>
    </div>
  );
}
