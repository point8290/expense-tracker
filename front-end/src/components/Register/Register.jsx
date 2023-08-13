import React, { useState } from "react";
import Form from "../Form/Form";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import api from "../../api/user";
import "./Register.css";
import { useNavigate } from "react-router-dom";
function Register(props) {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const updateNewUser = (key, value) => {
    switch (key) {
      case "name":
        setNewUser((previousState) => {
          return { ...previousState, name: value };
        });
        break;
      case "email":
        setNewUser((previousState) => {
          return { ...previousState, email: value };
        });
        break;
      case "mobile":
        setNewUser((previousState) => {
          return { ...previousState, mobile: value };
        });
        break;
      case "password":
        setNewUser((previousState) => {
          return { ...previousState, password: value };
        });
        break;
      case "confirmPassword":
        setNewUser((previousState) => {
          return { ...previousState, confirmPassword: value };
        });
        break;
      default:
        break;
    }
  };

  const onRegister = async (event) => {
    event.preventDefault();
    const response = await api.post("api/user/register", newUser);
    const data = response.data;
    if (data.status === "ok") {
      setNewUser({
        name: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/Login");
    }
  };

  return (
    <Form className="registerForm">
      <div className="formTitle">Register</div>
      <div>
        <label htmlFor="name"> Name </label>
        <input
          id="name"
          type="text"
          value={newUser.name}
          onChange={(event) => updateNewUser("name", event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="userEmail"> Email </label>
        <input
          id="userEmail"
          type="text"
          value={newUser.email}
          onChange={(event) => updateNewUser("email", event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="userMobile"> Mobile </label>
        <input
          id="userMobile"
          type="text"
          value={newUser.mobile}
          onChange={(event) => updateNewUser("mobile", event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="userPassword"> Password </label>
        <input
          id="userPassword"
          type="password"
          value={newUser.password}
          onChange={(event) => updateNewUser("password", event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="userConfirmPassword"> Confirm password </label>
        <input
          id="userConfirmPassword"
          type="password"
          value={newUser.confirmPassword}
          onChange={(event) =>
            updateNewUser("confirmPassword", event.target.value)
          }
        />
      </div>
      <div className="formLink">
        <Link to="/Login"> Already have an account? </Link>
      </div>
      <div onClick={onRegister}>
        <Button label="Register" />
      </div>
    </Form>
  );
}

export default Register;
