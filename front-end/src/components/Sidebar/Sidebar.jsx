import React from "react";
import { NavLink } from "react-router-dom";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import ExpenseList from "../ExpenseList/ExpenseList";
import "./Sidebar.css";
import Icon from "../Icon/Icon";
import { FaPlus } from "react-icons/fa";
function Sidebar(props) {
  const toggleClass = props.isSidebarOpen ? "sidebarOpen" : "sidebarClose";

  return (
    <aside className={toggleClass}>
      <NavLink to="/add_expense" element={<ExpenseForm />}>
        <Icon element={<FaPlus color="white" size={"15px"} />} />
        <p>Add Expense</p>
      </NavLink>
      <NavLink to="expense_list" element={<ExpenseList />}>
        <Icon element={<FaPlus color="white" size={"15px"} />} />
        <p>Expense List</p>
      </NavLink>
    </aside>
  );
}

export default Sidebar;
