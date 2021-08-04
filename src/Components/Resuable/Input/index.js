import React from "react";
import style from "./style";
import { TextField } from "@material-ui/core";

const Input = ({ ...rest }, props) => {
  const classes = style(props);

  return (
      <TextField {...rest} className={classes.inputStyle} autoComplete="true" />
  );
};
export default Input;