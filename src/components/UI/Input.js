import React from "react";
import classes from "./Input.module.css";
const Input =React.forwardRef((props,ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* Passing all the key value pairs , whichi make this highly configurable */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
