import React from "react";
import "./Home.css";
function Home() {
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
        <p style={{ paddingTop: "10px", fontSize: "30px" }}>
          To track your expense, please Login into your Account or Create a new
          One
        </p>
      </div>
      <div style={{ textAlign: "center", paddingTop: "10vh" }}>
        <div style={{ padding: "20px", textDecoration: "none" }}>
          <a
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "25px",
              color: "#ddd",
            }}
            href="/login"
          >
            Login
          </a>
        </div>
        <div style={{ padding: "10px", fontSize: "15px" }}>Or</div>
        <div style={{ padding: "10px" }}>
          <a
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "25px",
              color: "#ddd",
            }}
            href="/register"
          >
            Create a new Account
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
