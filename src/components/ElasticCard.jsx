import { Link } from "react-router-dom";

const ElasticCard = ({
  text,
  fontWeight = "300",
  fontSize = "16px",
  path = "/",
}) => {
  return (
    <Link to={path} className="elastic-link">
      <div className="elastic-card">
        <div className="elastic-card-content">
          <div className="dash" />
          <p className="p" style={{ fontSize, fontWeight }}>
            {text}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default ElasticCard;
