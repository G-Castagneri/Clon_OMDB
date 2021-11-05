import React from "react";
import Login from "../commons/Login";
import { useState } from "react";
import { loginUser } from "../state/user";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function LoginContainer() {
  const history = useHistory();
  const dispatch = useDispatch();
  //capturo lo q escribe el user//
  const [email, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("");
  //pedido a axios //
  const onChangeHandlerEmail = (e) => {
    console.log("EMAILL", e.target.value);
    setUserEmail(e.target.value);
  };
  const onChangeHandlerPassword = (e) => {
    console.log("password", e.target.value);
    setUserPassword(e.target.value);
  };

  const data = { email, password };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    //hago dispach de la funcion de redux
    dispatch(loginUser(data)).then(() => history.push("/"));
  };

  return (
    <Login
      onChangeHandlerEmail={onChangeHandlerEmail}
      onChangeHandlerPassword={onChangeHandlerPassword}
      onSubmitHandler={onSubmitHandler}
    />
  );
}

export default LoginContainer;
