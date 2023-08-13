import React, { useEffect, useState } from "react";
import api from "../../api/expense";
import Expense from "../Expense/Expense";
function ExpenseList() {
  const [expenseList, setExpenseList] = useState([]);

  useEffect(() => {
    const getExpenses = async () => {
      return await api.get("api/expense/get-all-expenses");
    };

    getExpenses()
      .then((response) => {
        const data = response.data;
        let expenses = [];
        if (data.status === "ok") {
          expenses = data.expenses;
        } else {
          alert(data.error);
        }
        setExpenseList(expenses);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div>
      {expenseList.map((expense, index) => (
        <Expense data={expense} />
      ))}
    </div>
  );
}

export default ExpenseList;
