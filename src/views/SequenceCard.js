import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SequenceCard = ({ name, duration, imgUrl, id }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <Link to={`/exercise/${id}`}>
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx">
            <h4>{name}</h4>
            <span>{`${duration} minutes`}</span>
          </div>
        </div>
      </Link>
    </Col>
  );
};
