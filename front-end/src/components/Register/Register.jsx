import React, { useState } from "react";
import Form from "../Form/Form";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.css";
function Register(props) {
  const [newUser, setNewUser] = useState({
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const updateNewUser = (key, value) => {
    setNewUser((prevState) => {
      return { ...prevState, key: value };
    });
  };

  const onRegister = (event) => {
    axios.post()
  };

  return (
    <Form className="registerForm">
      <div className="formTitle">Register</div>
      <div>
        <label htmlFor="userEmail"> Email </label>
        <input
          id="userEmail"
          type="text"
          value={newUser.email}
          onChange={(event) => {
            updateNewUser("email", event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="userMobile"> Mobile </label>
        <input
          id="userMobile"
          type="text"
          value={newUser.mobile}
          onChange={(event) => {
            updateNewUser("mobile", event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="userPassword"> Password </label>
        <input
          id="userPassword"
          type="password"
          value={newUser.password}
          onChange={(event) => {
            updateNewUser("password", event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="userConfirmPassword"> Confirm password </label>
        <input
          id="userConfirmPassword"
          type="password"
          value={newUser.confirmPassword}
          onChange={(event) => {
            updateNewUser("confirmPassword", event.target.value);
          }}
        />
      </div>
      <div className="formLink">
        <Link to="/Login"> Already have an account? </Link>
      </div>
      <div onClick={onRegister}>
        <Button label="Submit" />
      </div>
    </Form>
  );
}

export default Register;
