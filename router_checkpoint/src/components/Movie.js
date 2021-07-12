import { Card } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

function Movie({ movies }) {
  const history = useHistory();
  const { ID } = useParams();
  const Mov = movies.find((movie, i) => movie.id === Number(ID));

  return (
    <div>
      <Card>
        <iframe
          width="560"
          height="315"
          src={Mov.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <Card.Body className="cardbody">
          <Card.Title>{Mov.name}</Card.Title>
          <Card.Text>{Mov.description}</Card.Text>

          <button
            className="button"
            onClick={() => history.goBack()}
            variant="primary"
          >
            Go Back
          </button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Movie;
