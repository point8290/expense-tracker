import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ExpenseList from "../ExpenseList/ExpenseList";
import "./Sidebar.css";
import Icon from "../Icon/Icon";
import { FaPlus, FaUser, FaUserSecret } from "react-icons/fa";
import { GiExpense } from "react-icons/gi";
import { AppContext } from "../../AppContextProvider";
function Sidebar(props) {
  const toggleClass = props.isSidebarOpen ? "sidebarOpen" : "sidebarClose";
  const globalContext = useContext(AppContext);

  const items = globalContext.isUserLoggedIn ? (
    <aside className={toggleClass}>
      <NavLink to="/add-expense" element={<ExpenseForm />}>
        <Icon element={<FaPlus color="white" size={"15px"} />} />
        <p>Add Expense</p>
      </NavLink>
      <NavLink to="expense-list" element={<ExpenseList />}>
        <Icon element={<GiExpense color="white" size={"15px"} />} />
        <p>Expense List</p>
      </NavLink>
    </aside>
  ) : (
    <aside className={toggleClass}>
      <NavLink to="/login" element={<Login />}>
        <Icon element={<FaUserSecret color="white" size={"15px"} />} />
        <p>Login</p>
      </NavLink>
      <NavLink to="/register" element={<Register />}>
        <Icon element={<FaUser color="white" size={"15px"} />} />
        <p>Register</p>
      </NavLink>
    </aside>
  );
  return items;
}

export default Sidebar;
