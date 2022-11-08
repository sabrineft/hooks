import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

function MovieCard({ el }) {
 
  return (
    <Card style={{ width: "18rem", margin: "20px" }}>
      <Card.Img variant="top" src={el.posterurl} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>{el.description}</Card.Text>
      </Card.Body>
      <Card.Body>
        <ReactStars count={5} size={24} activeColor="#ffd700" edit={false} value={el.rating}/>
        <Card.Link href="#">Trailer</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
