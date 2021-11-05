import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../state/user";
import "../assets/navbar.css";
import "../assets/card.css";

function Navbar({ onChangeHandler, onSubmitHandler, user }) {
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div>
        <Button className="boton" href="/">
          Home
        </Button>
      </div>
      <div>
        <Form className="d-flex" onSubmit={(e) => onSubmitHandler(e)}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={onChangeHandler}
          />
          <Link to="/search">
            <Button className="boton" type="submit">
              Search
            </Button>
          </Link>
        </Form>
      </div>
      {user.login ? (
        <div>
          <Button className="boton">{user.email}</Button>
          <Link to="/">
            <Button className="boton" onClick={() => dispatch(logoutUser())}>
              Logout
            </Button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <Button className="boton" type="submit" as="input" value="Login" />
          </Link>
          <Link to="/register">
            <Button
              className="boton"
              as="input"
              type="submit"
              value="Register"
            />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
