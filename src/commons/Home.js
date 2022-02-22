import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../assets/home.css";
import { addFavorite } from "../state/favorite";


const Home = ({ currentItems }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const favList = useSelector((state) => state.favorite);
  
const onClickAddFavorite = (title, userId, movieId) => {
    const data = { title, userId, movieId};
    dispatch(addFavorite(data));
  };
  useEffect(() => {

  }, [favList])

  return (
    <main>
      <div className="container">
        {currentItems &&
          currentItems.map((movie, key) => (
            <Card key={key} className="color content">
              <div>
                <Card.Img className="imagen" variant="top" src={movie.Poster} />
              </div>
              <div className="gradiente titulo">{movie.Title}</div>
              {user && !favList.imdbID ? (
                <Button
                  className="boton"
                  type="button"
                  onClick={() => onClickAddFavorite(movie.Title, user.id, movie.imdbID)}
                >
                  favoritos
                </Button>
              ) : (null)}
            </Card>
            
          ))}
      </div>
    </main>
  );
};

export default Home ;
