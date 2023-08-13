import React, { useState, useContext } from "react";
import Form from "../Form/Form";
import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import api from "../../api/user";
import Button from "../Button/Button";
import { AppContext } from "../../AppContextProvider";
function Login() {
  const globalContext = useContext(AppContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const updateUser = (key, value) => {
    switch (key) {
      case "email":
        setUser((previousState) => {
          return { ...previousState, email: value };
        });
        break;

      case "password":
        setUser((previousState) => {
          return { ...previousState, password: value };
        });
        break;

      default:
        break;
    }
  };
  const onLogin = async (event) => {
    event.preventDefault();

    const response = await api.post("api/user/login", user);
    const data = response.data;
    if (data.status === "ok" && data.user) {
      localStorage.setItem("token", data.user);
      globalContext.setIsLoggedIn(true);
      setUser({
        email: "",
        password: "",
      });
      navigate("/");
    }
  };
  return (
    <Form className="loginForm">
      <div className="formTitle">Login</div>
      <div>
        <label htmlFor="userEmail"> Enter your email </label>
        <input
          id="userEmail"
          type="text"
          value={user.email}
          onChange={(event) => {
            updateUser("email", event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="userPassword">Enter your password </label>
        <input
          id="userPassword"
          type="password"
          value={user.password}
          onChange={(event) => {
            updateUser("password", event.target.value);
          }}
        />
      </div>
      <div className="formLink">
        <Link to="/forgot-passowrd"> Forgot password? </Link>
      </div>
      <div onClick={onLogin}>
        <Button label="Login" />
      </div>
    </Form>
  );
}

export default Login;
