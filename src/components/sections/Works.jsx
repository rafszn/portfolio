import { WORKS } from "../../lib/constants";
import SingleWorkCard from "./SingleWorkCard";

const Works = () => {
  return (
    <div>
      {WORKS.map((work, index) => (
        <div key={index}>
          <SingleWorkCard {...work} />
        </div>
      ))}
    </div>
  );
};
export default Works;
