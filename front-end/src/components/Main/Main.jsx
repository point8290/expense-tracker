import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Sidebar from "../Sidebar/Sidebar";
import "./Main.css";
import { AppContext } from "../../AppContextProvider";
import { useContext } from "react";
function Main() {
  const globalContext = useContext(AppContext);

  return (
    <div className="mainContainer">
      <Sidebar isSidebarOpen={globalContext.isSidebarOpen} />
      <div className="contentAreaContainer">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default Main;
