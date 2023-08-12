import React from "react";
import Form from "../Form/Form";
import { Link } from "react-router-dom";
import "./Login.css";
import Button from "../Button/Button";
function Login() {
  const onLogin = () => {};
  return (
    <Form className="loginForm" SubmitHandler={onLogin}>
      <div className="formTitle">Login</div>
      <div>
        <label htmlFor="userEmail"> Enter your email </label>
        <input id="userEmail" type="text" />
      </div>
      <div>
        <label htmlFor="userPassword">Enter your password </label>
        <input id="userPassword" type="password" />
      </div>
      <div className="formLink">
        <Link to="/forgot-passowrd"> Forgot password? </Link>
      </div>
      <Button label="Submit" />
    </Form>
  );
}

export default Login;
