import React from "react";
import { Form, Button } from "react-bootstrap";
import "../assets/login.css";
import "../assets/card.css";

function Login({
  onChangeHandlerEmail,
  onChangeHandlerPassword,
  onSubmitHandler,
}) {
  //const loginList = useSelector((state) => state.login);

  return (
    <div className="login">
      <Form style={{ textAlign: "center" }} onSubmit={onSubmitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={onChangeHandlerEmail}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={onChangeHandlerPassword}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>

        <Button className="boton" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
