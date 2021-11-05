import React from "react";
import Navbar from "../commons/Navbar";
import { useState } from "react";
import { searchMovies } from "../state/movies";

import { useDispatch, useSelector } from "react-redux";

function NavbarContainer() {
  const dispatch = useDispatch();
  //capturo lo q escribe el user//
  const [movies, setMovies] = useState("");

  //pedido a axios //
  const onChangeHandler = (e) => {
    dispatch(searchMovies(e.target.value));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    searchMovies(movies);
  };

  const user = useSelector((state) => state.user);
  console.log("USeRRR", user);
  return (
    <div>
      <Navbar
        setMovies={setMovies}
        onChangeHandler={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
        user={user}
      />
    </div>
  );
}

export default NavbarContainer;
