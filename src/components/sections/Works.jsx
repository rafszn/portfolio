import { WORKS } from "../../lib/constants";
import SingleWorkCard from "./SingleWorkCard";

const Works = () => {
  return (
    <div className="bg-[#1a1a1a]">
      {WORKS.map((work, index) => (
        <div key={index}>
          <SingleWorkCard {...work} />
        </div>
      ))}
    </div>
  );
};
export default Works;
