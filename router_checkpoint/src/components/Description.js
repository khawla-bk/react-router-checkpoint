import React from "react";
import { Link } from "react-router-dom";

function Description(props) {
  const description = props.location.state;

  return (
    <div>
      <h1> Movie's Description</h1>
      <p>{description}</p>

      <Link to="/">previous</Link>
    </div>
  );
}

export default Description;
