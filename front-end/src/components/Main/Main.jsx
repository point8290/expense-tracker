import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Sidebar from "../Sidebar/Sidebar";
import "./Main.css";
import { AppContext } from "../../AppContextProvider";
import { useContext } from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import ExpenseList from "../ExpenseList/ExpenseList";
import AuthenticatedRoutes from "../../utils/AuthenticatedRoutes";
function Main() {
  const globalContext = useContext(AppContext);

  return (
    <div className="mainContainer">
      <Sidebar isSidebarOpen={globalContext.isSidebarOpen} />
      <div className="contentAreaContainer">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/forgot-password" element={<Login />} /> */}
          <Route path="/register" element={<Register />} />
          <Route element={<AuthenticatedRoutes />}>
            <Route path="/add-expense" element={<ExpenseForm />} />
            <Route path="/expense-list" element={<ExpenseList />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default Main;
