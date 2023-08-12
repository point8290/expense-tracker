import React from "react";

function Form(props) {
  return <form onSubmit={props.SubmitHandler}>{props.children}</form>;
}

export default Form;
