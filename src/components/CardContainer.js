import React from "react";
import Card from "../commons/Card";
import { useSelector } from "react-redux";

const CardContainer = () => {
  // traigo al estado de redux store //
  const moviesList = useSelector((state) => state.movies);

  return <Card moviesList={moviesList} />;
};

export default CardContainer;
