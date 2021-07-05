import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  return (
    <div className="MovieCard">
      <img className="movieImg" src={props.movies.img} alt="" />

      <div className="caption">
        <StarRatingComponent className="star" value={props.movies.rate} />
        <h2>{props.movies.name} </h2>
        <p>{props.movies.description}</p>

        <div>
          <Link
            to={{
              pathname: `/description/${props.movies.title}`,
              state: props.movies.description
            }}
          >
            Read more
          </Link>{" "}
          <br />
          <Link
            to={{
              pathname: `/trailer/${props.movies.title}`,
              state: props.movies.trailer
            }}
          >
            Watch Trailer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
