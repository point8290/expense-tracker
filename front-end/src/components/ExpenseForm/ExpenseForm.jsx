import React, { useState } from "react";
import Form from "../Form/Form";
import Button from "../Button/Button";
import api from "../../api/expense";
import "./ExpenseForm.css";
import { useNavigate } from "react-router-dom";
function ExpenseForm(props) {
  const [newExpense, setNewExpense] = useState({
    title: "",
    content: "",
    amount: "",
    date: "",
  });

  const navigate = useNavigate();

  const updateNewExpense = (key, value) => {
    switch (key) {
      case "title":
        setNewExpense((previousState) => {
          return { ...previousState, title: value };
        });
        break;
      case "content":
        setNewExpense((previousState) => {
          return { ...previousState, content: value };
        });
        break;
      case "date":
        setNewExpense((previousState) => {
          return { ...previousState, date: value };
        });
        break;
      case "amount":
        setNewExpense((previousState) => {
          return { ...previousState, amount: value };
        });
        break;
      default:
        break;
    }
  };

  const onAddNewExpense = async (event) => {
    event.preventDefault();

    const response = await api.post("api/expense/save-expense", newExpense);
    const data = response.data;
    if (data.status === "ok") {
      setNewExpense({
        title: "",
        content: "",
        amount: "",
        date: "",
      });
      navigate("/expense-list");
    } else {
      alert(data.error);
    }
  };

  return (
    <Form className="expenseForm">
      <div className="formTitle">Add New Expense</div>
      <div>
        <label htmlFor="title"> Title </label>
        <input
          id="title"
          type="text"
          value={newExpense.title}
          onChange={(event) => updateNewExpense("title", event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content"> Content </label>
        <textarea
          id="content"
          value={newExpense.content}
          onChange={(event) => updateNewExpense("content", event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="date"> Date </label>
        <input
          id="date"
          type="date"
          value={newExpense.date}
          onChange={(event) => updateNewExpense("date", event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="amount"> Amount </label>
        <input
          id="amount"
          type="number"
          value={newExpense.amount}
          onChange={(event) => updateNewExpense("amount", event.target.value)}
        />
      </div>

      <div className="submitButton" onClick={onAddNewExpense}>
        <Button label="Add Expense" />
      </div>
    </Form>
  );
}

export default ExpenseForm;
