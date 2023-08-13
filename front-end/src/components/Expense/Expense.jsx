import "./Expense.css";

const Expense = (props) => {
  return (
    <div className="expenseContainer">
      <div className="expense">
        <h1>{props.data.title}</h1>
        <p>{props.data.content}</p>
        <p>{props.data.date}</p>
        <p>{props.data.amount}</p>
      </div>
    </div>
  );
};

export default Expense;
