import { Link } from "react-router-dom";

const StyledButton = ({ text, path = "/" }) => {
  return (
    <button className="styled-button">
      <Link to={path} className="button-wrapper">
        <div className="circle" />
        <p className="view">{text}</p>
      </Link>
    </button>
  );
};
export default StyledButton;
