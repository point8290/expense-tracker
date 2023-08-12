import React from "react";
import Form from "../Form/Form";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  const onLogin = () => {};
  return (
    <Form className="loginForm" SubmitHandler={onLogin}>
      <div className="formTitle">Login</div>
      <div>
        <label htmlFor="userEmail"> Email </label>
        <input id="userEmail" type="text" />
      </div>
      <div>
        <label htmlFor="userPassword"> Password </label>
        <input id="userPassword" type="password" />
      </div>
      <div className="forgotPasswordLink">
        <Link to="/forgot-passowrd"> Forgot password? </Link>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </Form>
  );
}

export default Login;
