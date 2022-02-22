import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import "../assets/home.css";
import "../assets/navbar.css";
import "../assets/card.css";
import { useEffect } from "react";
import { logoutUser } from "../state/user";
import { getFavorite } from "../state/favorite";

function Navbar({ onChangeHandler, onSubmitHandler, user }) {
  const dispatch = useDispatch();
  const history = useHistory();

  //hago dispach de la funcion de redux
  const logout = () => {
    dispatch(logoutUser()).then(() => history.push("/"));
  };
//hago dispatch de la funcion de redux pidiendo todos los fav de ese user
  const onClickGetFavorite = (user) => {
    dispatch(getFavorite(user));
  };
  
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
      <div>
        <Link to="#">
          <Button className="boton" type="submit">
            Movie
          </Button>
        </Link>
        <Link to="#">
          <Button className="boton" type="submit">
            Series
          </Button>
        </Link>
      </div>
      {user ? (
        <div>
          <Link to="/favorite">
            <Button
              className="boton"
              onClick={() => onClickGetFavorite(user.id)}
            >
              Favoritos
            </Button>
          </Link>
          <Button className="boton">{user?.email}</Button>
          <Link to="/">
            <Button className="boton" onClick={logout}>
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
