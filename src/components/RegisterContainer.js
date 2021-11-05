import React from "react";
import Register from "../commons/Register";
import { useState } from "react";
import { registerUser } from "../state/user";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

function RegisterContainer() {
  const history = useHistory();
  const dispatch = useDispatch();
  //capturo lo q escribe el user//
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //pedido a axios //
  const onChangeHandlerEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeHandlerPassword = (e) => {
    setPassword(e.target.value);
  };

  const data = { email, password };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    //hago dispach de la funcion de redux
    dispatch(registerUser(data)).then(() => history.push("/login"));
  };

  return (
    <Register
      onChangeHandlerEmail={onChangeHandlerEmail}
      onChangeHandlerPassword={onChangeHandlerPassword}
      onSubmitHandler={onSubmitHandler}
    />
  );
}

export default RegisterContainer;
