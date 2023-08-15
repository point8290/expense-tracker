import React, { useEffect, useState } from "react";
import api from "../../api/expense";
import Expense from "../Expense/Expense";
import { Navigate } from "react-router-dom";
import { getAuth } from "../../utils/auth";

function ExpenseList() {
  const [expenseList, setExpenseList] = useState([]);

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      "x-access-token": getAuth(),
    };

    const getExpenses = async () => {
      return await api.get("api/expense/get-all-expenses", { headers });
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
              <Navigate to="/Login" />;
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
        <Expense key={expense._id} data={expense} />
      ))}
    </div>
  );
}

export default ExpenseList;
