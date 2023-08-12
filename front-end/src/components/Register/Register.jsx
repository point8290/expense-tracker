import React from "react";
import Form from "../Form/Form";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./Register.css";
function Register() {
  const onRegister = () => {};
  return (
    <Form className="registerForm" SubmitHandler={onRegister}>
      <div className="formTitle">Register</div>
      <div>
        <label htmlFor="userEmail"> Email </label>
        <input id="userEmail" type="text" />
      </div>
      <div>
        <label htmlFor="userMobile"> Mobile </label>
        <input id="userMobile" type="text" />
      </div>
      <div>
        <label htmlFor="userPassword"> Password </label>
        <input id="userPassword" type="password" />
      </div>
      <div>
        <label htmlFor="userConfirmPassword"> Confirm password </label>
        <input id="userConfirmPassword" type="password" />
      </div>
      <div className="formLink">
        <Link to="/forgot-passowrd"> Already have an account? </Link>
      </div>
      <div>
        <Button label="Submit" />
      </div>
    </Form>
  );
}

export default Register;
