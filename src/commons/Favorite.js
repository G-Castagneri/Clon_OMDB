import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/home.css";
import { movieId } from "../state/movies";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory, useRouteMatch } from "react-router-dom";
import { removeFavorite, getFavorite } from "../state/favorite";
import axios from "axios";

const Favorite = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const favList = useSelector((state) => state.favorite);
  localStorage.setItem("fav", JSON.stringify(favList));
  const favStorage = JSON.parse(localStorage.getItem("fav"));
  
  const user = JSON.parse(localStorage.getItem("user"));
  const fav = JSON.parse(localStorage.getItem("fav"));

  const remove = (movieId, user) => {
    const data = { movieId, user };
    dispatch(removeFavorite(data));
  };
 
  useEffect(() => {
    console.log(favList)
    
  }, [favList]);
 console.log("FAV", fav)
  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      {favStorage && favStorage.map((movieID, key) => (
        <div>
          <Card className="color" style={{ border: "0" }}>
            <Card.Img className="imagen" variant="top" src={movieID.Poster} />
            <Card.Body
              style={{
                color: "white",
                backgroundColor: "rgb(31, 70, 128)",
                borderColor: "rgb(31, 70, 128)",
              }}
            >
              <Card.Title>{movieID.Title}</Card.Title>
              <Card.Text>{movieID.Plot}</Card.Text>
              <Card.Text>Director: {movieID.Director}</Card.Text>
              <Card.Text>Actors: {movieID.Actors}</Card.Text>
              <Card.Text>{movieID.Genre}</Card.Text>

              <Button className="boton" onClick={() => history.goBack()}>
                Go back
              </Button>
              <Button
                className="boton"
                onClick={() => remove(movieID.imdbID, user.id)}
              >
                Quitar de Favoritos
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Favorite;
