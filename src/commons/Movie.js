import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory, useRouteMatch } from "react-router-dom";
import axios from "axios";
import "../assets/app.css";
import "../assets/card.css";
function Movie() {
  const history = useHistory();

  const match = useRouteMatch();

  const [movieID, setMovieID] = useState([]);

  const movie = match.params.id;

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?apikey=cc4627c5&i=${movie}`)
      .then((data) => setMovieID(data.data));
  }, [movie]);

  return (
    <div className="container" >
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
        </Card.Body>
      </Card>
    </div>
  );
}

export default Movie;
