import React from "react";

function Icon(props) {
  return <div onClick={props.onClick}>{props.element}</div>;
}

export default Icon;
