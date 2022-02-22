import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/card.css";


const Cards = ({ moviesList }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      {moviesList.Search
        ? moviesList.Search.map((data, i) => {
            return (
              <div key={i}>
                <Card className="color">
                  <Card.Img
                    className="imagen"
                    variant="top"
                    src={data.Poster}
                  />
                  <Card.Body>
                    <Card.Title className="gradiente titulo">
                      {data.Title}
                    </Card.Title>
                  </Card.Body>
                  <Link to={`/movie/${data.imdbID}`}>
                    <Button className="boton" data={data}>
                      Mas info
                    </Button>
                  </Link>
                  <Button className="boton" type="submit" >
                    favoritos
                  </Button>
                </Card>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Cards;
