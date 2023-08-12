import React from "react";
import "./Form.css";
function Form(props) {
  return (
    <form className={props.className} onSubmit={props.SubmitHandler}>
      {props.children}
    </form>
  );
}

export default Form;
