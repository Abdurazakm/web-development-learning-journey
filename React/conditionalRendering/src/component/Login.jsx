import React from "react";
import Input from "./input";
const Login = (props) => {
  return (
    <form className="form">
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="password" />
      {props.is_registered && <Input type="password" placeholder="confirm password"></Input>}
      <button type="submit">{props.is_registered ? "Login" : "Register"}</button>
    </form>
  );
};
export default Login;
