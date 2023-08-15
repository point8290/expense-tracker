import React, { useEffect, useState } from "react";
import api from "../../api/expense";
import Expense from "../Expense/Expense";
import { useNavigate } from "react-router-dom";
function ExpenseList() {
  const [expenseList, setExpenseList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getExpenses = async () => {
      return await api.get("api/expense/get-all-expenses");
    };
    try {
      getExpenses()
        .then((response) => {
          const data = response.data;
          let expenses = [];
          if (data.status === "ok") {
            expenses = data.expenses;
          } else {
            if (data.error === "Invalid Token") {
              alert("Please Login");
              navigate("/Login");
            }
          }
          setExpenseList(expenses);
        })
        .catch((error) => {
          alert(error);
        });
    } catch (error) {
      console.error(error);
    }
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
