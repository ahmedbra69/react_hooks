import React from "react";
import { Button, Card } from "react-bootstrap";
import Starlogo from "./Starlogo.webp";
function MovieCard({ movies }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img className="cardimg" variant="top" src={movies.posterUrl} />
        <Card.Body>
          <Card.Title>{movies.title}</Card.Title>
          <Card.Text>{movies.description}</Card.Text>
          <Card.Title>
            {" "}
            rating in imdb:
            <br /> <img className="logorate" src={Starlogo} alt="logo"></img>
            {movies.rate}
          </Card.Title>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieCard;
