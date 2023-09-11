import React from "react";
import "./Home.css";
import { AppContext } from "../../AppContextProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const globalContext = useContext(AppContext);
  const navigate = useNavigate();
  const containerStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/back-ground.png)`,
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    objectFit: "contain",
  };

  return (
    <div style={containerStyle}>
      <div
        style={{
          textAlign: "center",
          fontFamily: "cursive",
          paddingTop: "10vh",
        }}
      >
        <h1 style={{ fontSize: "80px" }}> Welcome to the site </h1>
        {globalContext.isUserLoggedIn && (
          <p style={{ paddingTop: "10px", fontSize: "30px" }}>
            You can now track your expenses
          </p>
        )}
        {!globalContext.isUserLoggedIn && (
          <p style={{ paddingTop: "10px", fontSize: "30px" }}>
            To track your expense, please Login into your Account or Create a
            new One
          </p>
        )}
      </div>
      <div style={{ textAlign: "center", paddingTop: "10vh" }}>
        <div style={{ padding: "20px", textDecoration: "none" }}>
          {!globalContext.isUserLoggedIn && (
            <p
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "25px",
                color: "#ddd",
                cursor: "pointer",
              }}
              onClick={(e) => {
                navigate("/login");
              }}
            >
              Login
            </p>
          )}
          {globalContext.isUserLoggedIn && (
            <p
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "25px",
                color: "#ddd",
                cursor: "pointer",
              }}
              onClick={(e) => {
                navigate("/add-expense");
              }}
            >
              Add New Expenses
            </p>
          )}
        </div>
        <div style={{ padding: "10px", fontSize: "15px" }}>Or</div>
        <div style={{ padding: "10px" }}>
          {!globalContext.isUserLoggedIn && (
            <p
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "25px",
                color: "#ddd",
                cursor: "pointer",
              }}
              onClick={(e) => {
                navigate("/register");
              }}
            >
              Create a new Account
            </p>
          )}
          {globalContext.isUserLoggedIn && (
            <p
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "25px",
                color: "#ddd",
                cursor: "pointer",
              }}
              onClick={(e) => {
                navigate("/expense-list");
              }}
            >
              See Your Expense
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
