import React from "react";
import "./Form.css";
function Form(props) {
  return <form className={props.className}>{props.children}</form>;
}

export default Form;
